import 'package:flutter/material.dart';

void customAlertDialog({
  required BuildContext context,
  required String title,
  required String description,
  required Function onOK,
}) {
  final Widget cancelButton = TextButton(
    onPressed: () => Navigator.pop(context),
    child: Text(
      'Cancel',
      textScaleFactor: 1.2,
      style: TextStyle(color: Theme.of(context).colorScheme.secondary),
    ),
  );
  final Widget okButton = TextButton(
    onPressed: () => onOK(),
    child: Text(
      'OK',
      textScaleFactor: 1.2,
      style: TextStyle(color: Theme.of(context).colorScheme.secondary),
    ),
  );

  final AlertDialog alert = AlertDialog(
    backgroundColor: Theme.of(context).backgroundColor,
    title: Text(
      title,
      textScaleFactor: 1.1,
      style: TextStyle(color: Theme.of(context).colorScheme.secondary),
    ),
    content: Text(
      description,
      textScaleFactor: 1.1,
    ),
    actions: [
      cancelButton,
      okButton,
    ],
  );

  // show the dialog
  showDialog<AlertDialog>(
    context: context,
    builder: (BuildContext context) {
      return alert;
    },
  );
}
