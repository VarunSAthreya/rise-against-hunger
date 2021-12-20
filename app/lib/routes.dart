import 'package:cicadahack/screens/domate.dart';
import 'package:flutter/material.dart';

import 'screens/home.dart';
import 'screens/sign_in.dart';
import 'screens/sign_up.dart';
import 'screens/survey.dart';

final Map<String, WidgetBuilder> routes = {
  SignIn.routeName: (context) => const SignIn(),
  SignUp.routeName: (context) => const SignUp(),
  Home.routeName: (context) => const Home(),
  SurveyPage.routeName: (context) => const SurveyPage(),
  DonatePage.routeName: (context) => const DonatePage(),
};
