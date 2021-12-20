import 'package:cicadahack/screens/home.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:lottie/lottie.dart';

import '../components/gradient_container.dart';
import '../services/auth.dart';
import '../widgets/custom_textfield.dart';
import 'sign_in.dart';

class SignUp extends HookConsumerWidget {
  static const String routeName = '/signUp';

  const SignUp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _nameController = useTextEditingController();
    final _emailController = useTextEditingController();
    final _passwordController = useTextEditingController();

    final _emailIdErrorMessage = useState<String>('');
    final _passwordErrorMessage = useState<String>('');
    final _nameErrorMessage = useState<String>('');

    final _validityName = useState<bool>(true);
    final _validityEmail = useState<bool>(true);
    final _validityPassword = useState<bool>(true);

    final _isLoading = useState<bool>(false);

    final _auth = ref.watch(authProvider);

    Future<void> _signUp(BuildContext context) async {
      try {
        _isLoading.value = true;

        await _auth.signUpWithEmail(
          email: _emailController.text,
          password: _passwordController.text,
          name: _nameController.text,
        );

        Navigator.pushReplacementNamed(context, Home.routeName);
      } on FirebaseAuthException catch (e) {
        switch (e.code) {
          case 'email-already-in-use':
            _validityEmail.value = false;
            _emailIdErrorMessage.value = e.message.toString();
            break;
          case 'weak-password':
            _validityPassword.value = false;
            _passwordErrorMessage.value = e.message.toString();
            break;
          default:
            _validityEmail.value = false;
            _emailIdErrorMessage.value = e.message.toString();
        }
      } finally {
        _isLoading.value = false;
      }
    }

    Text _greetings() {
      return const Text(
        'Welcome',
        textScaleFactor: 2.5,
        style: TextStyle(
          fontWeight: FontWeight.bold,
          color: Colors.white,
        ),
      );
    }

    Column _signInRoute(BuildContext context) {
      return Column(
        children: [
          const Text(
            'Already have an account?',
            textScaleFactor: 1.3,
          ),
          const SizedBox(height: 5.0),
          GestureDetector(
            onTap: () =>
                Navigator.pushReplacementNamed(context, SignIn.routeName),
            child: Text(
              'Sign In',
              textScaleFactor: 1.3,
              style: TextStyle(
                color: Theme.of(context).colorScheme.secondary,
                letterSpacing: 1.4,
                fontWeight: FontWeight.bold,
                decoration: TextDecoration.underline,
              ),
            ),
          ),
          const SizedBox(height: 15.0),
        ],
      );
    }

    Column _inputForms() {
      return Column(
        children: [
          CustomTextField(
            controller: _nameController,
            title: 'Name',
            validity: _validityName.value,
            errorMessage: _nameErrorMessage.value,
            obscureText: false,
            iconData: FontAwesomeIcons.solidUser,
          ),
          const SizedBox(height: 20),
          CustomTextField(
            controller: _emailController,
            title: 'Email',
            validity: _validityEmail.value,
            errorMessage: _emailIdErrorMessage.value,
            obscureText: false,
            iconData: FontAwesomeIcons.solidEnvelope,
          ),
          const SizedBox(height: 20),
          CustomTextField(
            controller: _passwordController,
            title: 'Password',
            validity: _validityPassword.value,
            errorMessage: _passwordErrorMessage.value,
            obscureText: true,
            iconData: FontAwesomeIcons.lock,
          ),
          const SizedBox(height: 20),
        ],
      );
    }

    bool _isValidName(String name) {
      if (name.length < 3) {
        _nameErrorMessage.value = 'Name too short';
        return false;
      } else {
        return true;
      }
    }

    bool _isValidEmail(String email) {
      const String p =
          r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
      final RegExp regExp = RegExp(p);
      if (email.isEmpty) {
        //assigning error message to String variable emailIdErrorMessage
        _emailIdErrorMessage.value = 'Please enter a Email-id';
        return false;
      } else if (!regExp.hasMatch(email)) {
        //assigning error message to String variable emailIdErrorMessage
        _emailIdErrorMessage.value = 'Please enter a valid Email Address';
        return false;
      } else {
        return true;
      }
    }

    bool _isValidPassword(String password) {
      //Function that VALIDATES ENTERED PASSWORD
      const String pattern =
          r'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$';
      final RegExp regExp = RegExp(pattern);
      if (password.isEmpty) {
        //assigning error message to String variable passwordErrorMessage
        _passwordErrorMessage.value = 'Please enter Password';
        return false;
      } else if (password.length < 8) {
        //assigning error message to String variable passwordErrorMessage
        _passwordErrorMessage.value =
            'Password must contain at least 8 characters';
        return false;
      } else if (!regExp.hasMatch(password)) {
        //assigning error message to String variable passwordErrorMessage
        _passwordErrorMessage.value =
            'Password must contain \n at least 1 upper case alphabet,\nat least one number \nand at least one special character \nalong with lowercase alphabets';
        return false;
      } else {
        return true;
      }
    }

    Padding _signUpButton(BuildContext context) {
      return Padding(
        padding: const EdgeInsets.all(16.0),
        child: MaterialButton(
          height: MediaQuery.of(context).size.height * 0.08,
          minWidth: MediaQuery.of(context).size.width,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          onPressed: () async {
            _validityEmail.value = _isValidEmail(_emailController.text.trim());
            _validityPassword.value =
                _isValidPassword(_passwordController.text);
            _validityName.value = _isValidName(_nameController.text.trim());

            if (_validityEmail.value &&
                _validityPassword.value &&
                _validityName.value) {
              await _signUp(context);
            }
          },
          color: Theme.of(context).colorScheme.secondary,
          child: const Text(
            'SIGN UP',
            textScaleFactor: 1.4,
            style: TextStyle(color: Colors.white),
          ),
        ),
      );
    }

    return _isLoading.value
        ? GradientContainer(
            child: Center(
              child: SizedBox(
                height: 100,
                width: 100,
                child: Lottie.asset('assets/lottie/loading.json'),
              ),
            ),
          )
        : Scaffold(
            body: GradientContainer(
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _greetings(),
                    const SizedBox(height: 20),
                    _inputForms(),
                    const SizedBox(height: 10),
                    _signUpButton(context),
                    const SizedBox(height: 10),
                    _signInRoute(context),
                  ],
                ),
              ),
            ),
          );
  }
}
