// C++ code
//
#include <Servo.h>

Servo servo_12;

Servo servo_10;

void setup()
{
  servo_12.attach(12, 500, 2500);
  servo_10.attach(10, 500, 2500);
}

void loop()
{
  servo_12.write(0);
  servo_10.write(0);
  delay(1000); // Wait for 1000 millisecond(s)
  servo_12.write(60);
  delay(1000); // Wait for 1000 millisecond(s)
  servo_10.write(90);
  delay(1000); // Wait for 1000 millisecond(s)
  servo_12.write(45);
  delay(1000); // Wait for 1000 millisecond(s)
  servo_12.write(0);
  servo_10.write(0);
}
