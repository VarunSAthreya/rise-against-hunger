import 'package:cicadahack/models/survey.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:uuid/uuid.dart';
import 'package:uuid/uuid_util.dart';

class DatabaseService {
  DatabaseService._();

  //   Initialize uuid
  static const Uuid _uuid = Uuid(options: {'grng': UuidUtil.cryptoRNG});

  static final CollectionReference _usersRef =
      FirebaseFirestore.instance.collection('users');

  static final CollectionReference _surveysRef =
      FirebaseFirestore.instance.collection('survey');

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
}
