---
title: "Attendance Management Using RFID"
date: 2025-08-24
categories: ["IoT"]
tags: ["RFID", "Database", "Python"]
draft: false
---
## Introduction
Attendance tracking has become an essential aspect of schools, colleges, and workplaces.  
Traditional methods, such as passing attendance sheets, are time-consuming, prone to errors, and vulnerable to fake entries or data loss.  

To overcome these limitations, modern solutions leverage technology like **RFID, biometrics, NFC, Bluetooth, and barcode systems**. Among these, **RFID-based attendance systems** are reliable, secure, and efficient.  

This project demonstrates an **RFID Attendance Management System** using Arduino Uno, designed to automate attendance logging, improve efficiency, and reduce manual errors.

---

## System Overview
When a registered RFID card is scanned:
- ✅ **Green LED + Short buzzer tone** → Attendance recorded successfully.  
- ❌ **Red LED + Long buzzer tone** → Invalid/unregistered card detected.  

The system also logs attendance data with **date, time, and user details** in real-time, which can be exported to **Excel or a database** for reporting.

---

## Hardware Setup
- **Arduino Uno** – Microcontroller for system control.  
- **RFID RC522 Module** – Reads RFID cards.  
- **LEDs (Green & Red)** – Visual feedback.  
- **Buzzer** – Audio feedback.  

### Wiring Connections
- SDA → Pin 10  
- SCK → Pin 13  
- MOSI → Pin 11  
- MISO → Pin 12  
- RST → Pin 9  
- Green LED → Pin 5  
- Red LED → Pin 6  
- Buzzer → Pin 7  

---

## Software Implementation
- Arduino communicates with the RFID module using **SPI protocol**.  
- The system continuously checks for new RFID cards.  
- Each card’s **UID (Unique Identifier)** is compared with stored valid IDs.  
- Attendance is logged in the format:  

## Attendance Logging
- Valid card → Record stored with timestamp.  
- Invalid card → Rejected with feedback.  
- Data can be displayed on the **Serial Monitor** or exported to **Excel/database** for reporting.  
- DATA, Date, Time, Name, UserNumber

---

## RFID RC522 Pin Configuration
| Pin No. | Name         | Description                                                                 |
|---------|-------------|-----------------------------------------------------------------------------|
| 1       | VCC         | Power supply (3.3V)                                                         |
| 2       | RST         | Reset pin                                                                  |
| 3       | GND         | Ground                                                                     |
| 4       | IRQ         | Interrupt pin (wake-up signal)                                              |
| 5       | MISO/SCL/TX | MISO for SPI, SCL for I²C, TX for UART                                     |
| 6       | MOSI        | Master Out Slave In (SPI)                                                   |
| 7       | SCK         | Serial Clock (SPI)                                                          |
| 8       | SS/SDA/RX   | SS for SPI, SDA for I²C, RX for UART                                       |

---

## Results
- ✅ Automated attendance logging achieved.  
- ✅ Real-time validation with LED + buzzer feedback.  
- ✅ Data export possible for reporting and analysis.  

---

## Conclusion
This **RFID-based Attendance Management System** provides a secure, efficient, and user-friendly solution for managing attendance in **schools, colleges, offices, and events**.  
It simplifies the traditional process while reducing errors and improving overall operational efficiency.  