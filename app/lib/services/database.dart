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
}
