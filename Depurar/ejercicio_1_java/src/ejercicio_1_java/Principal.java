package ejercicio_1_java;

import javax.swing.JOptionPane;

public class Principal {

	public static void main(String[] args) {
	
		int numero = 0;
		String mensaje;
		
		numero = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));
		
		if (numero % 2 == 1) {
			JOptionPane.showMessageDialog(null, "El numero ingresado es par");
			mensaje = "El numero ingresado es par";
		}else {
			JOptionPane.showMessageDialog(null, "El numero ingresado es impar");
			mensaje = "El numero ingresado es impar";
		}

	}

}
