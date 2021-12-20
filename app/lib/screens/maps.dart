import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:lottie/lottie.dart' as lottie;

import '../models/survey.dart';
import '../services/database.dart';
import 'home.dart';

class MapsLocation extends StatefulWidget {
  static const routeName = '/map';
  final Survey survey;
  const MapsLocation({Key? key, required this.survey}) : super(key: key);

  @override
  _MapsLocationState createState() => _MapsLocationState();
}

class _MapsLocationState extends State<MapsLocation> {
  late GoogleMapController mapController;

  late LatLng _currentLatLng;
  bool _isLoading = false;

  @override
  void initState() {
    Geolocator.getCurrentPosition(forceAndroidLocationManager: true)
        .then((Position position) {
      setState(() {
        debugPrint('GOTT LOCATION!!!');
        _currentLatLng = LatLng(position.latitude, position.longitude);
      });
    }).catchError((e) {
      debugPrint(e.toString());
      setState(() {
        _currentLatLng = const LatLng(13.032938920257688, 77.59200508656798);
      });
    });

    super.initState();
  }

  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
  }

  Set<Marker> _createMarker() {
    return {
      Marker(
        markerId: const MarkerId("marker_1"),
        position: _currentLatLng,
      ),
    };
  }

  void _updateMarker(LatLng argument) {
    debugPrint('$argument');
    setState(() {
      _currentLatLng = argument;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.secondary,
        title: const Text(
          'Maps',
          textAlign: TextAlign.center,
        ),
      ),
      body: _isLoading
          ? Center(
              child: SizedBox(
                height: 300,
                width: 300,
                child: lottie.Lottie.asset('assets/lottie/loading.json'),
              ),
            )
          : GoogleMap(
              onMapCreated: _onMapCreated,
              initialCameraPosition: CameraPosition(
                target: _currentLatLng,
                zoom: 11.0,
              ),
              markers: _createMarker(),
              onTap: (argument) => _updateMarker(argument),
              onLongPress: (argument) => _updateMarker(argument),
            ),
      floatingActionButton: Row(
        children: [
          const SizedBox(width: 40),
          FloatingActionButton(
            onPressed: () async {
              setState(() {
                _isLoading = true;
              });
              //   List<Placemark> placemarks = await placemarkFromCoordinates(
              //       _currentLatLng.latitude, _currentLatLng.longitude);
              //   print(placemarks.toString());
              try {
                widget.survey.location = _currentLatLng;
                await DatabaseService.addSurvey(survey: widget.survey);
                Navigator.pushReplacementNamed(context, Home.routeName);
              } catch (e) {
                debugPrint(e.toString());
              }
            },
            child: const Icon(CupertinoIcons.forward),
          ),
        ],
      ),
    );
  }
}
