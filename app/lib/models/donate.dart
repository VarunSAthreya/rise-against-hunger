import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class Donate {
  final String? id;
  final String name;
  final String phnumber;
  final int people;
  String? userId;
  LatLng? location;

  Donate({
    this.id,
    required this.name,
    required this.phnumber,
    required this.people,
    this.userId,
    this.location,
  });

  factory Donate.fromDocumentSnapshot(DocumentSnapshot snapshot) {
    final Map<String, dynamic> data = snapshot.data()! as Map<String, dynamic>;

    return Donate(
      id: data['id'].toString(),
      name: data['name'].toString(),
      phnumber: data['phnumber'].toString(),
      userId: data['user_id'].toString(),
      people: int.parse(data['people'].toString()),
      location: LatLng(
        double.parse(data['location'].latitude.toString()),
        double.parse(data['location'].longitude.toString()),
      ),
    );
  }

  static List<Donate> fromQuerySnapshot(
    QuerySnapshot snapshot,
  ) {
    return snapshot.docs.map((doc) {
      return Donate(
        id: doc['id'].toString(),
        name: doc['name'].toString(),
        phnumber: doc['phnumber'].toString(),
        userId: doc['user_id'].toString(),
        people: int.parse(doc['people'].toString()),
        location: LatLng(
          double.parse(doc['location'].latitude.toString()),
          double.parse(doc['location'].longitude.toString()),
        ),
      );
    }).toList();
  }
}
