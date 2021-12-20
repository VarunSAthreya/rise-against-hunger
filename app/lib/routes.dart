import 'package:flutter/material.dart';

import 'screens/home.dart';
import 'screens/sign_in.dart';
import 'screens/sign_up.dart';

final Map<String, WidgetBuilder> routes = {
  SignIn.routeName: (context) => const SignIn(),
  SignUp.routeName: (context) => const SignUp(),
  Home.routeName: (context) => const Home(),
};
