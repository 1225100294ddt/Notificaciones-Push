import 'package:flutter_test/flutter_test.dart';
import 'package:loteria_push/main.dart';

void main() {
  testWidgets('muestra la pantalla inicial de Lotería Push', (tester) async {
    await tester.pumpWidget(const LoteriaApp());
    expect(find.text('¡Que comience la lotería!'), findsOneWidget);
    expect(find.text('Crear sala como cantor'), findsOneWidget);
  });
}
