import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:lottie/lottie.dart';

class SplashScreen extends HookWidget {
  static const routeName = '/splash';
  final String changeRoute;
  const SplashScreen({Key? key, required this.changeRoute}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    useEffect(() {
      Future.delayed(const Duration(seconds: 3)).then((_) {
        Navigator.of(context).pushReplacementNamed(changeRoute);
      });
    }, []);

    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Lottie.asset('assets/lottie/outline_food.json'),
            AnimatedTextKit(
              animatedTexts: [
                TypewriterAnimatedText(
                  'Loading Info...',
                  textStyle: const TextStyle(
                    fontSize: 32.0,
                    fontWeight: FontWeight.bold,
                  ),
                  speed: const Duration(milliseconds: 100),
                ),
              ],
              totalRepeatCount: 4,
              pause: const Duration(milliseconds: 1000),
              displayFullTextOnTap: true,
              stopPauseOnTap: true,
            )
          ],
        ),
      ),
    );
  }
}
