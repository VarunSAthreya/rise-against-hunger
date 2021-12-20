import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../services/auth.dart';

class Home extends HookConsumerWidget {
  static const routeName = '/home';
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _auth = ref.watch(authProvider);

    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        color: Theme.of(context).colorScheme.secondary,
        child: SingleChildScrollView(
            child: Padding(
          padding: const EdgeInsets.all(20),
          child: Container(
            width: double.infinity,
            height: MediaQuery.of(context).size.height - 50,
            decoration: BoxDecoration(
              color: Theme.of(context).primaryColor,
              borderRadius: BorderRadius.circular(15),
            ),
            child: Column(
              children: const [Text('hey')],
            ),
          ),
        )),
      ),
    );
  }
}
