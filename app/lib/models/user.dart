import 'package:cloud_firestore/cloud_firestore.dart';

class Users {
  final String id;
  final String name;
  final String email;

  Users({
    required this.id,
    required this.name,
    required this.email,
  });

  factory Users.fromDocumentSnapshot(DocumentSnapshot snapshot) {
    final Map<String, dynamic> data = snapshot.data()! as Map<String, dynamic>;

    return Users(
      id: data['id'].toString(),
      name: data['name'].toString(),
      email: data['email'].toString(),
    );
  }

  static List<Users> fromQuerySnapshot(
    QuerySnapshot snapshot,
  ) {
    return snapshot.docs.map((doc) {
      return Users(
        id: doc['id'].toString(),
        name: doc['name'].toString(),
        email: doc['email'].toString(),
      );
    }).toList();
  }
}
