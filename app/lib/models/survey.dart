import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class Survey {
  final String id;
  final int adult;
  final int children;
  final int male;
  final int female;
  final int requiredFood;
  final String situation;
  final LatLng? location;

  Survey({
    required this.id,
    required this.adult,
    required this.children,
    required this.male,
    required this.female,
    required this.requiredFood,
    required this.situation,
    this.location,
  });

  factory Survey.fromDocumentSnapshot(DocumentSnapshot snapshot) {
    final Map<String, dynamic> data = snapshot.data()! as Map<String, dynamic>;

    return Survey(
      id: data['id'].toString(),
      adult: int.parse(data['adult'].toString()),
      children: int.parse(data['children'].toString()),
      male: int.parse(data['male'].toString()),
      female: int.parse(data['female'].toString()),
      requiredFood: int.parse(data['required_food'].toString()),
      situation: data['situation'].toString(),
      location: LatLng(
        double.parse(data['location'].latitude.toString()),
        double.parse(data['location'].longitude.toString()),
      ),
    );
  }

  static List<Survey> fromQuerySnapshot(
    QuerySnapshot snapshot,
  ) {
    return snapshot.docs.map((doc) {
      return Survey(
        id: doc['id'].toString(),
        adult: int.parse(doc['adult'].toString()),
        children: int.parse(doc['children'].toString()),
        male: int.parse(doc['male'].toString()),
        female: int.parse(doc['female'].toString()),
        requiredFood: int.parse(doc['required_food'].toString()),
        situation: doc['situation'].toString(),
        location: LatLng(
          double.parse(doc['location'].latitude.toString()),
          double.parse(doc['location'].longitude.toString()),
        ),
      );
    }).toList();
  }
}
