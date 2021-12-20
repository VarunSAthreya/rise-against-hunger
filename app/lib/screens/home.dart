import 'package:cicadahack/services/auth.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Home extends HookConsumerWidget {
  static const routeName = '/home';
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _auth = ref.watch(authProvider);

    return Scaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            _auth.signOut();
          },
          child: const Text('Sign Out'),
        ),
      ),
    );
  }
}
