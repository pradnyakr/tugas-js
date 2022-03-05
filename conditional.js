//========================================================================================
// No 1

/**
 * Nilai dari interval
 * 
 * Jika interval di atas 100, maka di sebut "Expert"
 * Jika interval di atas 70 sampai 100, maka di sebut "Pro"
 * Jika interval di atas 50 sampai 70, maka di sebut "Normal"
 * JIka interval d atas 30 sampai 50, maka di sebut "Basic"
 * Jika interval di bawah 30, maka di sebut "Beginner"
 */

// PSEUDOCODE
/**
 * STORE weight WITH ANY NUMBER
 * 
 * IF interval GREATER THAN 100 THEN
 *  DISPLAY "Expert"
 * ELSE IF interval GREATER THAN 70 AND LESS THAN EQUAL 100 THEN
 *  DISPLAY "Pro"
 * ELSE IF interval GREATER THAN 50 AND LESS THAN EQUAL 70 THEN
 *  DISPLAY "Normal"
 * ELSE IF interval GREATER THAN 30 AND LESS THAN EQUAL 50 THEN
 *  DISPLAY "Basic"
 * ELSE IF interval LESS THAN EQUAL 30 THEN
 *  DISPLAY "Beginner"
 * END IF
 */
//========================================================================================
var interval = 75;
var text = "Character is ";
if (interval > 100) {
console.log("Expert \n")
} else if (interval >= 70 && interval <= 100) {
console.log(text + "Pro \n")
} else if (interval >= 50 && interval < 70) {
console.log(text + "Normal \n")
} else if (interval >= 30 && interval < 50) {
console.log(text + "Basic \n")
} else if (interval < 30) {
console.log(text + "Beginner \n")
}

//========================================================================================
// No 2

/**
 * Input text dari minuman
 * 
 * Jika minuman Sweet Tea atau sweet tea, maka cetak hasil adalah You choose Sweet Tea, thanks
 * Jika minuman Plain Tea atau plain tea, maka cetak hasil adalah You choose Plain Tea, thanks
 * Jika minuman Boba atau boba, maka cetak hasil adalah You choose Boba, thanks
 * Jika minuman Milk Coffee atau milk coffee, maka cetak hasil adalah You choose Milk Coffee, thanks
 * Jika minuman Choco Ice atau choco ice, maka cetak hasil adalah You choose Choco Ice, thanks
 */

// PSEUDOCODE
/**
 * STORE minuman WITH sweet tea
 * 
 * SWITCH from variable minuman
 *  IF minuman Sweet Tea or sweet tea
 *  DISPLAY "You choose Sweet Tea, Thanks"
 *  BREAK
 *  IF minuman Plain Tea or plain tea
 *  DISPLAY "You choose Plain Tea, Thanks"
 *  BREAK
 *  IF minuman Boba or boba
 *  DISPLAY "You choose Boba, Thanks"
 *  BREAK
 *  IF minuman Milk Coffee or milk coffee
 *  DISPLAY "You choose Milk Coffee, Thanks"
 *  BREAK
 *  IF minuman Choco Ice or choco ice
 *  DISPLAY "You choose Choco Ice, Thanks"
 *  BREAK
 *  DEFAULT
 *  DISPLAY "Kamu belum memilih minuman!""
 * END IF
 */
//========================================================================================
var minuman = "sweet tea";
switch(minuman) {
    case "Sweet Tea": case "sweet tea":
      console.log("You choose Sweet Tea, Thanks \n")
      break;
    case "Plain Tea": case "plain tea":
      console.log("You choose Plain Tea, Thanks \n")
      break;
    case "Boba": case "boba":
      console.log("You choose Boba, Thanks \n")
      break;
    case "Milk Coffee": case "milk coffee":
      console.log("You choose Milk Coffee, Thanks \n")
      break;
    case "Choco Ice": case "choco ice":
      console.log("You choose Choco Ice, Thanks \n")
      break;
    default:
      console.log("Kamu belum memilih minuman! \n")
  }

//========================================================================================
// No 3

/**
 * Input text pada coupon
 * Input angka pada pembelian
 * 
 * Jika coupon adalah FreeOngkir
 * Jika pembelian lebih dari atau sama dengan 50000. Maka akan ada potongan 10%.
 * Jika pembelian antara 30000 dan 50000. Maka akan ada potongan 5%.
 * Jika kurang dari 30000. Maka akan ada potongan 2.5%
 * 
 * Jika coupon adalah Free15%
 * Jika pembelian lebih dari atau sama dengan 30000. Maka akan ada potongan 15%.
 * Jika kurang dari 300000. Maka akan ada potongan 0%
 * 
 * Cetak Total pembelian anda ditambah variable angka pembelian
 */

// PSEUDOCODE 
/**
 * STORE weight WITH ANY NUMBER
 * 
 * SWITCH from variable coupon
 * IF coupon EQUAL TO FreeOngkir THEN
 *  IF variable pembelian GREATER THAN 50000 THEN
 *  variable total EQUAL pembelian SUBTRACT (pembelian MULTIPLY 10 DIVIDE 100)
 *  DISPLAY "total"
 * ELSE IF variable pembelian GREATER 30000 AND 50000 THEN
 *  variable total EQUAL pembelian SUBTRACT (pembelian MULTIPLY 5 DIVIDE 100)
 *  DISPLAY "total"
 * ELSE 
 *  variable total EQUAL pembelian SUBTRACT (pembelian MULTIPLY 2.5 DIVIDE 100)
 *  DISPLAY "total"
 * BREAK
 * 
 * IF coupon EQUAL TO Free15% THEN
 *  IF variable pembelian GREATER THAN 30000 THEN
 *  variable total EQUAL pembelian SUBTRACT (pembelian MULTIPLY 15 DIVIDE 100)
 *  DISPLAY "total"
 * ELSE 
 *  variable total EQUAL pembelian SUBTRACT (pembelian MULTIPLY 0 DIVIDE 100)
 *  DISPLAY "total"
 * BREAK
 * DEFAULT 
 *  DISPLAY "Belum memakai kupon atau Belum ada total pembelian yang kamu keluarkan!"
 * END IF
 */
//========================================================================================
  var coupon = "FreeOngkir";
  var pembelian = 100000;
  var kata = "Total pembelian anda "
  
  switch (coupon) {
      case 'FreeOngkir':
          if (pembelian >= 50000) {
              var total = pembelian - (pembelian*10/100);
              console.log(kata + "Rp."+ total);
          } else if (pembelian >= 30000 && pembelian < 50000) {
            var total = pembelian - (pembelian*5/100);
            console.log(kata + "Rp."+ total);
          } else {
            var total = pembelian - (pembelian*2.5/100);
            console.log(kata + "Rp."+ total);
          }
          break;
      case 'Free15%':
          if (pembelian >= 30000) {
              var total = pembelian - (pembelian*15/100);
              console.log(kata + "Rp."+ total);
          } else {
            var total = pembelian - (pembelian*0/100);
            console.log(kata + "Rp."+ total);
          }
          break;
      default:
              console.log("Belum memakai kupon atau Belum ada total pembelian yang kamu keluarkan!")
  }