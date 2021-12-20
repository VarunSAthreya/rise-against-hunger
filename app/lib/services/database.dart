import 'package:cicadahack/models/donate.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:uuid/uuid.dart';
import 'package:uuid/uuid_util.dart';

import '../models/survey.dart';

class DatabaseService {
  DatabaseService._();

  //   Initialize uuid
  static const Uuid _uuid = Uuid(options: {'grng': UuidUtil.cryptoRNG});

  static final CollectionReference _usersRef =
      FirebaseFirestore.instance.collection('users');

  static final CollectionReference _surveysRef =
      FirebaseFirestore.instance.collection('survey');

  static final CollectionReference _donateRef =
      FirebaseFirestore.instance.collection('donate');

  static Future<void> addUser({
    required String id,
    required String name,
    required String email,
  }) async {
    await _usersRef.doc(id).set({
      "id": id,
      "name": name,
      "email": email,
    });
  }

  static Future<void> updateUser({
    required String id,
    required String key,
    required dynamic value,
  }) async {
    await _usersRef.doc(id).update({key: value});
  }

  static Future<void> addSurvey({
    required Survey survey,
  }) async {
    final String id = _uuid.v4();
    await _surveysRef.doc(id).set({
      'id': id,
      'adult': survey.adult,
      'children': survey.children,
      'male': survey.male,
      'female': survey.female,
      'required_food': survey.requiredFood,
      'situation': survey.situation,
      'location': GeoPoint(
        survey.location!.latitude,
        survey.location!.longitude,
      )
    });
  }

  static Future<void> addDonate({required Donate donate}) async {
    final String id = _uuid.v4();
    await _donateRef.doc(id).set({
      'id': id,
      "name": donate.name,
      "phnumber": donate.phnumber,
      "location": GeoPoint(
        donate.location!.latitude,
        donate.location!.longitude,
      ),
      "user_id": FirebaseAuth.instance.currentUser!.uid,
      "people": donate.people,
    });
  }
}
