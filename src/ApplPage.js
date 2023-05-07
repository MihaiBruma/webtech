import React from 'react';

function ApplPage() {
  return (
  	<div>
      <h1>AVR ATMega32 Pin Out.</h1>
      <h3> >>> Port A (PA7-PA0): Port A serves as analog inputs for A/D converter. It also acts as an 8-bit bidirectional I/O port if the A/D converter is not used internally.</h3>
      <h4> >>> Port B (PB7-PB0) and Port D (PD7-PD0): These ports are 8-bit bidirectional I/O ports. Their output buffers have symmetrical drive characteristics with high source and sink capability. As inputs, these are pulled low if the pull-up resistors are used. It also provides various special functional features of the ATmega32.</h4>
      <h5> >>> Port C (PC7-PC0): Port C is an 8-bit bidirectional I/O port. If the Joint Test Action Group (JTAG) interface is enabled, the pull-up resistors on pins PC2 (TCK), PC3 (TMS), and PC5 (TDI) will be activated.</h5>
      </div>
  );
}

export default ApplPage;
