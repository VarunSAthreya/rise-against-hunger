import 'package:flutter/material.dart';

import 'screens/sign_in.dart';
import 'screens/sign_up.dart';

final Map<String, WidgetBuilder> routes = {
  SignIn.routeName: (context) => SignIn(),
  SignUp.routeName: (context) => const SignUp(),
};
