import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Lista de Empleados'),
        ),
        body: EmployeeList(),
      ),
    );
  }
}

class EmployeeList extends StatefulWidget {
  @override
  _EmployeeListState createState() => _EmployeeListState();
}

class _EmployeeListState extends State<EmployeeList> {
  List<dynamic> employees = [];

  @override
  void initState() {
    super.initState();
    fetchEmployees();
  }

  Future<void> fetchEmployees() async {
    final response = await http.get('http://localhost:3000/employees' as Uri);
    if (response.statusCode == 200) {
      setState(() {
        employees = jsonDecode(response.body);
      });
    } else {
      throw Exception('Failed to load employees');
    }
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: employees.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(employees[index]['firstName'] +
              ' ' +
              employees[index]['lastName']),
          subtitle: Text(employees[index]['position']),
          // Otros campos relevantes
        );
      },
    );
  }
}
