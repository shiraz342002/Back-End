function simpleinterestcalc(interest_rate, amount, tax1, tax2) {
  interest_rate_decimal = interest_rate / 100;

  annual_interest = amount * interest_rate_decimal;

  total_tax = 0;

  if (tax1 !== undefined) {
    tax1_decimal = tax1 / 100;
    tax_amount1 = annual_interest * tax1_decimal;
    total_tax += tax_amount1;
  }
  if (tax2 !== undefined) {
    tax2_decimal = tax2 / 100;
    tax_amount2 = annual_interest * tax2_decimal;
    total_tax += tax_amount2;
  }
  net_annual_interest = annual_interest - total_tax;
  final_amount = amount + net_annual_interest;
  console.log("Annual Interest Inclusive of Tax:", annual_interest.toFixed(2) + " PKR");
  console.log("Total Tax:", total_tax.toFixed(2) + " PKR");
  console.log("Final Amount Exclusive of Tax :", net_annual_interest.toFixed(2) + " PKR");
  console.log("Your amount after 1 year will be :", final_amount.toFixed(2) + " PKR");

  console.log("Montly Profit Inclusive of Tax :"+(annual_interest/12).toFixed(2));
  console.log("Montly Profit Exclusive of Tax :"+(net_annual_interest/12).toFixed(2));
  
}


simpleinterestcalc(20.5, 100000, 2.5);

