//รอเพิ่มภาพกับ Instructionการทำ
const foodMenu = [
    // === 5 เมนูแรก (ตัวอย่างข้อมูลจริง) ===
    { name: "ข้าวกะเพราหมูสับไข่ดาว", image: "https://images.unsplash.com/photo-1626804475297-4160cb2af811?w=500&q=80", calories: 620, protein: "28g", carbs: "55g", fat: "32g", ingredients: ["หมูสับ 150g", "ใบกะเพรา", "พริกและกระเทียม", "ไข่ไก่ 1 ฟอง", "เครื่องปรุงรส (น้ำปลา, ซอสหอยนางรม, น้ำตาล)"], instructions: ["โขลกพริกและกระเทียมให้พอหยาบ", "ตั้งกระทะใส่น้ำมัน ผัดพริกกระเทียมให้หอม", "ใส่หมูสับลงไปผัดจนสุก", "ปรุงรสตามชอบ ใส่ใบกะเพราแล้วปิดไฟ", "ทอดไข่ดาว โปะลงบนข้าวสวยร้อนๆ"] },
    { name: "ข้าวผัดหมู", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 500, protein: "20g", carbs: "60g", fat: "20g", ingredients: ["ข้าวสวยแช่เย็น 1 ถ้วย", "เนื้อหมูหั่นชิ้น", "ไข่ไก่ 1 ฟอง", "กระเทียมสับ", "ต้นหอมซอย"], instructions: ["ตั้งกระทะเจียวกระเทียมให้หอม", "ใส่เนื้อหมูลงไปผัดจนสุก ตามด้วยไข่ไก่", "ยีไข่ให้สุก แล้วใส่ข้าวสวยลงไปผัดให้เข้ากัน", "ปรุงรสด้วยซีอิ๊วขาว ซอสปรุงรส และน้ำตาลเล็กน้อย", "โรยต้นหอมซอย ผัดให้เข้ากันพร้อมเสิร์ฟ"] },
    { name: "ข้าวมันไก่ต้ม", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80", calories: 560, protein: "25g", carbs: "65g", fat: "22g", ingredients: ["เนื้อไก่ 1 ชิ้นใหญ่", "ข้าวสาร", "กระเทียม, ขิงแว่น, รากผักชี", "น้ำจิ้มเต้าเจี้ยว", "แตงกวา"], instructions: ["ต้มเนื้อไก่กับรากผักชีและกระเทียมจนสุก หั่นเป็นชิ้น", "นำน้ำซุปไก่ที่ได้ไปหุงข้าวพร้อมกับขิงแว่นและกระเทียม", "เมื่อข้าวสุก ตักใส่จาน โปะด้วยไก่ต้ม", "เสิร์ฟพร้อมน้ำจิ้มเต้าเจี้ยว แตงกวา และน้ำซุปร้อนๆ"] },
    { name: "ข้าวมันไก่ทอด", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80", calories: 660, protein: "22g", carbs: "65g", fat: "35g", ingredients: ["สะโพกไก่ไม่มีกระดูก", "แป้งทอดกรอบ", "ข้าวมัน (หุงเตรียมไว้)", "น้ำจิ้มไก่หวาน", "แตงกวา"], instructions: ["นำเนื้อไก่ไปคลุกแป้งทอดกรอบให้ทั่ว", "ตั้งน้ำมันให้ร้อน ทอดไก่จนเหลืองกรอบ", "นำไก่มาหั่นเป็นชิ้นพอดีคำ วางบนข้าวมัน", "เสิร์ฟพร้อมน้ำจิ้มไก่และแตงกวา"] },
    { name: "ข้าวหมูแดง", image: "https://images.unsplash.com/photo-1548943487-a2e4f43b4850?w=500&q=80", calories: 550, protein: "26g", carbs: "70g", fat: "18g", ingredients: ["เนื้อหมูแดงหั่นสไลด์", "กุนเชียงทอด", "ไข่ต้มครึ่งฟอง", "ข้าวสวย", "น้ำราดหมูแดงและซีอิ๊วดำ"], instructions: ["ตักข้าวสวยใส่จาน", "จัดเรียงหมูแดง กุนเชียง และไข่ต้มลงบนข้าว", "ราดน้ำหมูแดงให้ชุ่มฉ่ำ", "เสิร์ฟพร้อมต้นหอมและซีอิ๊วดำพริกสด"] },

    // === เมนูที่เหลือ (ข้อความคร่าวๆ รอการแก้ไข) ===
    { name: "ข้าวหมูกรอบ", image: "https://images.unsplash.com/photo-1606495390974-9faea0b57e79?w=500&q=80", calories: 700, protein: "20g", carbs: "65g", fat: "40g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวขาหมู (เนื้อล้วน)", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 620, protein: "28g", carbs: "60g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวไข่เจียวหมูสับ", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", calories: 600, protein: "20g", carbs: "50g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหมูทอดกระเทียม", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 545, protein: "25g", carbs: "55g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าเป็ดย่าง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 540, protein: "26g", carbs: "60g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดกุ้ง", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 450, protein: "18g", carbs: "60g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดปู", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 465, protein: "16g", carbs: "60g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดต้มยำกุ้ง", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 500, protein: "18g", carbs: "62g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดแหนม", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 590, protein: "20g", carbs: "60g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดแกงเขียวหวาน", image: "https://images.unsplash.com/photo-1606495390974-9faea0b57e79?w=500&q=80", calories: 600, protein: "22g", carbs: "65g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวคลุกกะปิ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 550, protein: "25g", carbs: "68g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวพะแนงหมู", image: "https://images.unsplash.com/photo-1548943487-a2e4f43b4850?w=500&q=80", calories: 585, protein: "24g", carbs: "55g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวแกงกะหรี่ไก่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 545, protein: "22g", carbs: "58g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดพริกแกงหมู", image: "https://images.unsplash.com/photo-1626804475297-4160cb2af811?w=500&q=80", calories: 540, protein: "24g", carbs: "55g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวกะเพราไก่", image: "https://images.unsplash.com/photo-1626804475297-4160cb2af811?w=500&q=80", calories: 480, protein: "25g", carbs: "55g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวไก่กระเทียมพริกไทย", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 470, protein: "28g", carbs: "55g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวคะน้าหมูกรอบ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 650, protein: "18g", carbs: "60g", fat: "38g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดผักบุ้งไฟแดง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 405, protein: "8g", carbs: "60g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวไข่ข้นกุ้ง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 515, protein: "22g", carbs: "50g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าไก่ย่างจิ้มแจ่ว", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 500, protein: "35g", carbs: "55g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหมูยอทอด", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 545, protein: "15g", carbs: "58g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดกุนเชียง", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 560, protein: "18g", carbs: "65g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวฉู่ฉี่ปลาทู", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 550, protein: "24g", carbs: "55g", fat: "26g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวปลากะพงผัดฉ่า", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 505, protein: "26g", carbs: "55g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดสับปะรด", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 520, protein: "15g", carbs: "70g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหมกไก่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 600, protein: "28g", carbs: "65g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวยำปักษ์ใต้ (ไข่ต้ม)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 390, protein: "15g", carbs: "60g", fat: "10g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ผัดไทยกุ้งสด", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80", calories: 570, protein: "18g", carbs: "68g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ก๋วยเตี๋ยวเรือหมูน้ำตก", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 400, protein: "22g", carbs: "45g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ก๋วยเตี๋ยวต้มยำหมู", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 440, protein: "20g", carbs: "50g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "เย็นตาโฟเส้นใหญ่", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 380, protein: "18g", carbs: "55g", fat: "10g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "บะหมี่เกี๊ยวหมูแดง", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 475, protein: "25g", carbs: "60g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ราดหน้าหมูหมัก", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 520, protein: "24g", carbs: "65g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ผัดซีอิ๊วหมู", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 580, protein: "22g", carbs: "60g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ก๋วยเตี๋ยวคั่วไก่", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 525, protein: "25g", carbs: "50g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สุกี้น้ำทะเล", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 290, protein: "20g", carbs: "35g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สุกี้แห้งหมู", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 430, protein: "22g", carbs: "40g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "มาม่าผัดขี้เมาหมู", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 515, protein: "18g", carbs: "55g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ขนมจีนน้ำยาปลา", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 465, protein: "18g", carbs: "58g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ขนมจีนแกงเขียวหวาน", image: "https://images.unsplash.com/photo-1606495390974-9faea0b57e79?w=500&q=80", calories: 580, protein: "22g", carbs: "60g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ก๋วยจั๊บน้ำข้น", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 460, protein: "20g", carbs: "50g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ก๋วยจั๊บญวน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 400, protein: "18g", carbs: "55g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ผัดหมี่โคราช", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 545, protein: "15g", carbs: "65g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "มักกะโรนีผัดซอสมะเขือเทศ", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 490, protein: "22g", carbs: "60g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สปาเก็ตตี้คาโบนาร่า", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 615, protein: "20g", carbs: "55g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สปาเก็ตตี้ซอสเนื้อ", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 520, protein: "25g", carbs: "60g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สปาเก็ตตี้ผัดขี้เมาทะเล", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 470, protein: "22g", carbs: "55g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สปาเก็ตตี้เบคอนพริกแห้ง", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 560, protein: "18g", carbs: "55g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "พาสต้าเพสโต้ไก่", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 590, protein: "26g", carbs: "50g", fat: "32g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "มักกะโรนีอบชีส", image: "https://images.unsplash.com/photo-1555126634-ae327a41eb93?w=500&q=80", calories: 650, protein: "22g", carbs: "55g", fat: "38g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "พิซซ่าฮาวายเอี้ยน", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 535, protein: "24g", carbs: "60g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "พิซซ่าเปปเปอโรนี", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 590, protein: "26g", carbs: "58g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "เบอร์เกอร์เนื้อ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 615, protein: "30g", carbs: "45g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "เบอร์เกอร์ไก่ทอด", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 595, protein: "22g", carbs: "55g", fat: "32g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "เบอร์เกอร์หมู", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 550, protein: "25g", carbs: "45g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "แซนด์วิชแฮมชีส", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 390, protein: "18g", carbs: "35g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "แซนด์วิชทูน่ามายองเนส", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 420, protein: "20g", carbs: "35g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "คลับแซนด์วิช", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 505, protein: "25g", carbs: "45g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ฮอทดอก (Hotdog)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 330, protein: "12g", carbs: "30g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ฟิชแอนด์ชิปส์", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 640, protein: "22g", carbs: "60g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สเต็กหมูพริกไทยดำ", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 510, protein: "35g", carbs: "30g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สเต็กไก่สไปซี่", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 375, protein: "40g", carbs: "20g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สเต็กเนื้อริบอาย", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 555, protein: "45g", carbs: "15g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สเต็กปลาแซลมอน", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 425, protein: "35g", carbs: "15g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สลัดอกไก่ย่างน้ำใส", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", calories: 250, protein: "30g", carbs: "15g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สลัดทูน่า", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", calories: 255, protein: "22g", carbs: "15g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ซีซาร์สลัดไก่", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", calories: 410, protein: "28g", carbs: "18g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สเต็กปลาดอลลี่", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 315, protein: "25g", carbs: "20g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "มันฝรั่งอบชีสเบคอน", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 485, protein: "15g", carbs: "50g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "พอร์คชอป", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 520, protein: "38g", carbs: "25g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าเนื้อ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 560, protein: "25g", carbs: "70g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าหมูทอด", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 680, protein: "28g", carbs: "75g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าไก่และไข่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 540, protein: "30g", carbs: "65g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวแกงกะหรี่หมูทอด", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 760, protein: "26g", carbs: "85g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าปลาไหล", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 530, protein: "22g", carbs: "70g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าแซลมอนเทอริยากิ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 560, protein: "30g", carbs: "65g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ซูชิเซ็ตรวม (10 คำ)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 490, protein: "25g", carbs: "75g", fat: "10g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ทงคตสึราเมน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 685, protein: "28g", carbs: "65g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "โชยุราเมน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 515, protein: "25g", carbs: "70g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "มิโซะราเมน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 545, protein: "26g", carbs: "70g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ยากิโซบะหมู", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 555, protein: "22g", carbs: "60g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "อุด้งน้ำซุปกุ้งเทมปุระ", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 505, protein: "18g", carbs: "75g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ซารุโซบะ (หมี่เย็น)", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 345, protein: "15g", carbs: "60g", fat: "5g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ทาโกะยากิ (6 ลูก)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 345, protein: "12g", carbs: "40g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "โอโคโนมิยากิ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 505, protein: "20g", carbs: "50g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวยำเกาหลี", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 505, protein: "22g", carbs: "70g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "จาจังมยอน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 600, protein: "20g", carbs: "85g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ซุปกิมจิเต้าหู้อ่อน", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 480, protein: "24g", carbs: "55g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "หมูผัดโคชูจัง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 570, protein: "28g", carbs: "65g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ต๊อกบกกี", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 440, protein: "12g", carbs: "75g", fat: "10g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ไก่ทอดเกาหลี", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 625, protein: "30g", carbs: "70g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "คิมบับ (1 โรล)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 390, protein: "15g", carbs: "55g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "แนงมยอน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 425, protein: "18g", carbs: "70g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ซุปไก่ตุ๋นโสม", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 480, protein: "55g", carbs: "25g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "บุลโกกิเนื้อ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 530, protein: "32g", carbs: "60g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดหยางโจว", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 530, protein: "22g", carbs: "65g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหมูแดงฮ่องกง", image: "https://images.unsplash.com/photo-1548943487-a2e4f43b4850?w=500&q=80", calories: 540, protein: "26g", carbs: "68g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าเป็ดย่างฮ่องกง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 595, protein: "28g", carbs: "65g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "บะหมี่ผัดสไตล์จีน", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80", calories: 530, protein: "18g", carbs: "65g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ติ่มซำเซ็ตรวม", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 380, protein: "20g", carbs: "35g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "กระเพาะปลาน้ำแดง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 230, protein: "15g", carbs: "25g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "โจ๊กหมูใส่ไข่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 360, protein: "18g", carbs: "45g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวต้มปลา", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 320, protein: "22g", carbs: "40g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวต้มหมูสับ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 360, protein: "18g", carbs: "45g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "มาโปโทฟู", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 560, protein: "24g", carbs: "60g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวกะเพราเนื้อสับ", image: "https://images.unsplash.com/photo-1626804475297-4160cb2af811?w=500&q=80", calories: 610, protein: "30g", carbs: "55g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหมูกระเทียมพริกไทย", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 520, protein: "26g", carbs: "55g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวไก่ผัดเม็ดมะม่วง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 605, protein: "28g", carbs: "60g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวปลาหมึกผัดไข่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 555, protein: "25g", carbs: "55g", fat: "26g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดน้ำพริกลงเรือ", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 520, protein: "20g", carbs: "65g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวผัดปลาสลิด", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80", calories: 525, protein: "22g", carbs: "60g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวเนื้อทอดกระเทียม", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", calories: 575, protein: "32g", carbs: "55g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวหน้าเนื้อตุ๋น", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 560, protein: "30g", carbs: "60g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวตับผัดกระเทียม", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 495, protein: "28g", carbs: "55g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวไข่เจียวกุ้งสับ", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", calories: 575, protein: "22g", carbs: "50g", fat: "32g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ยำวุ้นเส้นทะเล", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", calories: 305, protein: "20g", carbs: "45g", fat: "5g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ยำมาม่าหมูสับ", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", calories: 425, protein: "18g", carbs: "55g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ส้มตำไทยไข่เค็ม", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80", calories: 430, protein: "15g", carbs: "65g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "น้ำตกหมู", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80", calories: 490, protein: "28g", carbs: "50g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ลาบหมู", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80", calories: 465, protein: "26g", carbs: "50g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ไก่ย่างครึ่งตัว", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 585, protein: "45g", carbs: "45g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "คอหมูย่าง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 595, protein: "25g", carbs: "45g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ซุปหน่อไม้", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&q=80", calories: 295, protein: "8g", carbs: "55g", fat: "5g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ต้มแซ่บกระดูกอ่อน", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 480, protein: "25g", carbs: "50g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "แกงอ่อมหมู", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 440, protein: "24g", carbs: "45g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดผัดมะเขือยาว", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 490, protein: "18g", carbs: "55g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดผัดดอกกุยช่าย", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 440, protein: "26g", carbs: "50g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดผัดวุ้นเส้น", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 480, protein: "15g", carbs: "65g", fat: "18g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดไก่ผัดขิง", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 435, protein: "25g", carbs: "50g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดปลาดุกผัดเผ็ด", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 535, protein: "22g", carbs: "55g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดแกงส้มชะอม", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 495, protein: "24g", carbs: "55g", fat: "20g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดต้มข่าไก่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 540, protein: "22g", carbs: "50g", fat: "28g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวราดมัสมั่นไก่", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 610, protein: "25g", carbs: "60g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "พายเนื้อ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 540, protein: "22g", carbs: "45g", fat: "30g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "คีชโลเรน (Quiche)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 505, protein: "18g", carbs: "30g", fat: "35g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "เครปคาว (แฮมชีส)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 445, protein: "22g", carbs: "40g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "แพนเค้กไข่ดาวเบคอน", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 515, protein: "18g", carbs: "55g", fat: "25g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ข้าวโอ๊ตต้มหมูสับ", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 360, protein: "18g", carbs: "45g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "โจ๊กข้าวโอ๊ตไก่ฉีก", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 320, protein: "22g", carbs: "40g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "อะโวคาโดโทสต์", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 400, protein: "15g", carbs: "35g", fat: "22g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สมูทตี้โบลว์", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 475, protein: "20g", carbs: "65g", fat: "15g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "กราโนล่าโยเกิร์ต", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 390, protein: "15g", carbs: "55g", fat: "12g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "สลัดเต้าหู้เย็น", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", calories: 240, protein: "18g", carbs: "20g", fat: "10g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ปอเปี๊ยะสด", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 275, protein: "12g", carbs: "45g", fat: "5g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] },
    { name: "ก๋วยเตี๋ยวลุยสวน", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", calories: 330, protein: "15g", carbs: "50g", fat: "8g", ingredients: ["วัตถุดิบ 1...", "วัตถุดิบ 2..."], instructions: ["ขั้นตอนที่ 1...", "ขั้นตอนที่ 2..."] }
];

function startRandomize() {
    const btn = document.getElementById('randomBtn');
    const resultCard = document.getElementById('resultCard');
    const foodNameEl = document.getElementById('foodName');
    const nutritionContent = document.getElementById('nutritionContent');
    const foodImage = document.getElementById('foodImage');

    btn.disabled = true; 
    btn.innerText = "กำลังคิดเมนู... 🍳";
    resultCard.style.display = 'block';
    
    // ซ่อนโภชนาการ และซ่อนรูปภาพตอนกำลังสุ่ม
    nutritionContent.classList.add('hidden');
    foodImage.classList.add('hidden');
    foodNameEl.classList.add('animating');

    let counter = 0;
    const shuffleInterval = setInterval(() => {
        const randomTempIndex = Math.floor(Math.random() * foodMenu.length);
        foodNameEl.innerText = foodMenu[randomTempIndex].name;
        counter++;

        if (counter > 15) {
            clearInterval(shuffleInterval);
            showFinalResult();
        }
    }, 100); 
}

function showFinalResult() {
    const btn = document.getElementById('randomBtn');
    const foodNameEl = document.getElementById('foodName');
    const nutritionContent = document.getElementById('nutritionContent');
    const foodImage = document.getElementById('foodImage');

    const finalIndex = Math.floor(Math.random() * foodMenu.length);
    const selectedFood = foodMenu[finalIndex];

    foodNameEl.classList.remove('animating');
    foodNameEl.innerText = "🎉 " + selectedFood.name + " 🎉";

    // อัปเดตรูปภาพ และแสดงรูปออกมา
    foodImage.src = selectedFood.image;
    foodImage.classList.remove('hidden');

    document.getElementById('foodCalories').innerText = selectedFood.calories;
    document.getElementById('foodProtein').innerText = selectedFood.protein;
    document.getElementById('foodCarbs').innerText = selectedFood.carbs;
    document.getElementById('foodFat').innerText = selectedFood.fat;
    
    // === เพิ่มการตรวจจับอาการแพ้ ตอนสุ่มได้ ===
    const warningEl = document.getElementById('allergyWarning');
    const allergiesFound = checkAllergies(selectedFood.name, selectedFood.ingredients);

    if (allergiesFound) {
        warningEl.innerHTML = `⚠️ <b>ระวัง!</b> เมนูนี้มีส่วนผสมของ: <u>${allergiesFound.join(', ')}</u> ที่คุณแพ้`;
        warningEl.classList.remove('hidden');
    } else {
        warningEl.classList.add('hidden');
    }
    // ===================================

    const viewRandomBtn = document.getElementById('viewRandomRecipeBtn');
    if(viewRandomBtn) {
        viewRandomBtn.onclick = function() {
            openRecipe(selectedFood.name);
        };
    }

    nutritionContent.classList.remove('hidden');
    btn.disabled = false;
    btn.innerText = "สุ่มเมนูอีกครั้ง!";
}

// 1. ฟังก์ชันจัดหมวดหมู่อัตโนมัติ (เช็คจากชื่ออาหาร)
function assignCategories() {
    foodMenu.forEach(food => {
        const name = food.name;
        if (name.includes('ก๋วยเตี๋ยว') || name.includes('เส้น') || name.includes('สปาเก็ตตี้') || name.includes('บะหมี่') || name.includes('มักกะโรนี') || name.includes('พาสต้า') || name.includes('ราเมน') || name.includes('อุด้ง') || name.includes('โซบะ') || name.includes('ขนมจีน') || name.includes('ก๋วยจั๊บ') || name.includes('ผัดไทย') || name.includes('มาม่า')) {
            food.category = 'อาหารเส้น';
        } else if (name.includes('จีน') || name.includes('ฮ่องกง') || name.includes('หยางโจว') || name.includes('กระเพาะปลา') || name.includes('ติ่มซำ') || name.includes('โจ๊ก') || name.includes('เต้าหู้') || name.includes('หมูแดง') || name.includes('เป็ดย่าง')) {
            food.category = 'อาหารจีน';
        } else if (name.includes('ทาโกะยากิ') || name.includes('ปอเปี๊ยะ') || name.includes('แซนด์วิช') || name.includes('ฮอทดอก') || name.includes('พาย') || name.includes('เครป') || name.includes('เฟรนช์ฟรายส์') || name.includes('ซูชิ') || name.includes('ลุยสวน')) {
            food.category = 'ของทานเล่น';
        } else if (name.includes('ข้าว')) {
            food.category = 'อาหารจานข้าว';
        } else {
            food.category = 'อื่นๆ'; 
        }
    });
}

// 2. ฟังก์ชันวาดการ์ดเมนูอาหารลงบนหน้าเว็บ
function renderMenuGrid(menuArray) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = ''; // ล้างข้อมูลเก่าออกก่อน

    if(menuArray.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; color: #888;">😢 ไม่พบเมนูที่คุณค้นหา ลองพิมพ์คำอื่นดูนะครับ</p>';
        return;
    }

    menuArray.forEach(food => {
        grid.innerHTML += `
            <div class="menu-card">
                <img src="${food.image}" alt="${food.name}">
                <h4>${food.name}</h4>
                <p>🔥 ${food.calories} kcal</p>
            </div>
        `;
    });
}

// 3. ฟังก์ชันกรองหมวดหมู่เมื่อกดปุ่ม
let currentCategory = 'ทั้งหมด'; // เก็บค่าสถานะว่าตอนนี้ดูหมวดอะไรอยู่

function filterCategory(category, btnElement) {
    currentCategory = category;

    // อัปเดตสีปุ่มให้รู้ว่ากดปุ่มไหนอยู่
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // ล้างช่องค้นหา
    document.getElementById('searchInput').value = '';

    // กรองข้อมูล
    let filteredMenu;
    if (category === 'ทั้งหมด') {
        filteredMenu = foodMenu;
    } else {
        filteredMenu = foodMenu.filter(food => food.category === category);
    }
    
    renderMenuGrid(filteredMenu);
}

// 4. ฟังก์ชันค้นหาแบบพิมพ์ชื่อ
function searchFood() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    
    // กรองสองชั้น: กรองตามหมวดหมู่ปัจจุบันก่อน แล้วค่อยกรองตามคำค้นหา
    let filteredMenu = foodMenu;
    if (currentCategory !== 'ทั้งหมด') {
        filteredMenu = filteredMenu.filter(food => food.category === currentCategory);
    }
    
    filteredMenu = filteredMenu.filter(food => food.name.toLowerCase().includes(searchText));
    
    renderMenuGrid(filteredMenu);
}

// สั่งให้ระบบทำงานทันทีเมื่อหน้าเว็บโหลดเสร็จ
window.onload = function() {
    // 1. ดึงชื่อคนใช้งานมาแสดง (โค้ดเก่าของคุณ)
    const savedName = localStorage.getItem('currentUser');
    if (savedName) {
        const subtitleEl = document.querySelector('.subtitle');
        if(subtitleEl) subtitleEl.innerHTML = `สวัสดีคุณ <strong>${savedName}</strong> 👋 วันนี้รับอะไรดีครับ?`;
    }

    // 2. จัดหมวดหมู่อัตโนมัติและแสดงผลเมนูทั้งหมดตอนเปิดเว็บ
    assignCategories();
    renderMenuGrid(foodMenu);
};

// 2. ฟังก์ชันวาดการ์ดเมนูอาหารลงบนหน้าเว็บ
function renderMenuGrid(menuArray) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = ''; 

    if(menuArray.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; color: #888;">😢 ไม่พบเมนูที่คุณค้นหา ลองพิมพ์คำอื่นดูนะครับ</p>';
        return;
    }

    menuArray.forEach(food => {
        grid.innerHTML += `
            <div class="menu-card" onclick="openRecipe('${food.name}')" style="cursor: pointer;">
                <img src="${food.image}" alt="${food.name}">
                <h4>${food.name}</h4>
                <p>🔥 ${food.calories} kcal</p>
                <button class="small-btn">ดูวิธีทำ</button>
            </div>
        `;
    });
}

// 5. ฟังก์ชันเปิดหน้าต่างวิธีทำ (Modal)
function openRecipe(foodName) {
    // ค้นหาข้อมูลอาหารจากชื่อ
    const food = foodMenu.find(f => f.name === foodName);
    if (!food) return;

    // ใส่ข้อมูลพื้นฐาน
    document.getElementById('modalFoodName').innerText = food.name;
    document.getElementById('modalFoodImage').src = food.image;
    
    // === เพิ่มการตรวจจับอาการแพ้ ในหน้าวิธีทำ ===
    const modalWarningEl = document.getElementById('modalAllergyWarning');
    const modalAllergiesFound = checkAllergies(food.name, food.ingredients);

    if (modalAllergiesFound) {
        modalWarningEl.innerHTML = `⚠️ <b>ระวัง!</b> เมนูนี้มีส่วนผสมของ: <u>${modalAllergiesFound.join(', ')}</u> ที่คุณแพ้`;
        modalWarningEl.classList.remove('hidden');
    } else {
        modalWarningEl.classList.add('hidden');
    }
    // ===================================

    // อ้างอิงพื้นที่แสดงผล
    const ingList = document.getElementById('modalIngredients');
    const instList = document.getElementById('modalInstructions');
    
    // ตรวจสอบว่ามีข้อมูลวัตถุดิบไหม (ถ้าไม่มีให้แสดงข้อความสำรอง)
    if (food.ingredients && food.ingredients.length > 0) {
        ingList.innerHTML = food.ingredients.map(item => `<li>${item}</li>`).join('');
    } else {
        ingList.innerHTML = '<li>กำลังรออัปเดตข้อมูลวัตถุดิบ 🥺</li>';
    }

    // ตรวจสอบว่ามีข้อมูลวิธีทำไหม
    if (food.instructions && food.instructions.length > 0) {
        instList.innerHTML = food.instructions.map(step => `<li>${step}</li>`).join('');
    } else {
        instList.innerHTML = '<li>กำลังรออัปเดตขั้นตอนวิธีทำ 🥺</li>';
    }

    // แสดง Modal
    document.getElementById('recipeModal').style.display = 'flex';
}

// 6. ฟังก์ชันปิดหน้าต่างวิธีทำ
function closeRecipe() {
    document.getElementById('recipeModal').style.display = 'none';
}

// 7. ปิดหน้าต่างเมื่อคลิกพื้นที่สีดำนอกกล่อง
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

let currentOpenFood = null; // ตัวแปรจำว่ากำลังเปิดเมนูไหนอยู่

// อัปเดตฟังก์ชันเปิดหน้าต่างวิธีทำ
function openRecipe(foodName) {
    const food = foodMenu.find(f => f.name === foodName);
    if (!food) return;

    currentOpenFood = food.name; // บันทึกชื่อเมนูที่เปิด

    document.getElementById('modalFoodName').innerText = food.name;
    document.getElementById('modalFoodImage').src = food.image;

    const ingList = document.getElementById('modalIngredients');
    const instList = document.getElementById('modalInstructions');
    
    if (food.ingredients && food.ingredients.length > 0) {
        ingList.innerHTML = food.ingredients.map(item => `<li>${item}</li>`).join('');
    } else {
        ingList.innerHTML = '<li>กำลังรออัปเดตข้อมูลวัตถุดิบ 🥺</li>';
    }

    if (food.instructions && food.instructions.length > 0) {
        instList.innerHTML = food.instructions.map(step => `<li>${step}</li>`).join('');
    } else {
        instList.innerHTML = '<li>กำลังรออัปเดตขั้นตอนวิธีทำ 🥺</li>';
    }

    // โหลดข้อมูล "ถูกใจ" จาก LocalStorage
    const isLiked = localStorage.getItem('like_' + currentOpenFood);
    const likeBtn = document.getElementById('likeBtn');
    const likeIcon = document.getElementById('likeIcon');
    if (isLiked === 'true') {
        likeBtn.classList.add('liked');
        likeIcon.innerText = '💛';
    } else {
        likeBtn.classList.remove('liked');
        likeIcon.innerText = '🤍';
    }

    // โหลดคอมเมนต์จาก LocalStorage
    loadComments();

    document.getElementById('recipeModal').style.display = 'flex';
}

// 8. ฟังก์ชันกดถูกใจ
function toggleLike() {
    if (!currentOpenFood) return;
    
    const likeBtn = document.getElementById('likeBtn');
    const likeIcon = document.getElementById('likeIcon');
    const currentState = localStorage.getItem('like_' + currentOpenFood);

    if (currentState === 'true') {
        // ยกเลิกถูกใจ
        localStorage.removeItem('like_' + currentOpenFood);
        likeBtn.classList.remove('liked');
        likeIcon.innerText = '🤍';
    } else {
        // กดถูกใจ
        localStorage.setItem('like_' + currentOpenFood, 'true');
        likeBtn.classList.add('liked');
        likeIcon.innerText = '💛';
    }
}

// 9. ฟังก์ชันแชร์เมนู (ใช้ Web Share API ถ้าอุปกรณ์รองรับ)
function shareFood() {
    if (!currentOpenFood) return;
    
    const shareText = `วันนี้กินอะไรดี? แนะนำเมนู "${currentOpenFood}" น่าทานมากๆ ลองมาสุ่มเมนูกันดูนะ! 🍳🍋`;
    
    // ตรวจสอบว่าเบราว์เซอร์มือถือรองรับการแชร์ไหม
    if (navigator.share) {
        navigator.share({
            title: 'วันนี้กินอะไรดี?',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('ผู้ใช้ยกเลิกการแชร์', err));
    } else {
        // ถ้าไม่รองรับ (มักจะเป็นในคอมพิวเตอร์) ให้คัดลอกข้อความแทน
        navigator.clipboard.writeText(shareText);
        alert('คัดลอกข้อความสำหรับแชร์เรียบร้อยแล้ว! นำไปวางในแชทได้เลย 🔗');
    }
}

// 10. ระบบคอมเมนต์
function loadComments() {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = ''; // ล้างของเก่า
    
    // ดึงข้อมูลคอมเมนต์ของเมนูนี้จาก LocalStorage
    const savedComments = JSON.parse(localStorage.getItem('comments_' + currentOpenFood)) || [];
    
    if (savedComments.length === 0) {
        commentList.innerHTML = '<li style="color: #888; text-align: center; border: none; background: none;">ยังไม่มีความคิดเห็น มาเป็นคนแรกที่คอมเมนต์กันเถอะ!</li>';
        return;
    }

    savedComments.forEach(c => {
        commentList.innerHTML += `
            <li>
                <span class="comment-author">👤 ${c.author}</span>
                ${c.text}
            </li>
        `;
    });
}

function addComment() {
    if (!currentOpenFood) return;

    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (text === '') return;

    // ดึงชื่อผู้ใช้ที่ล็อกอินไว้ ถ้าไม่มีให้ใช้ "ไม่ระบุชื่อ"
    const username = localStorage.getItem('currentUser') || 'เพื่อนร่วมโต๊ะอาหาร';
    const authorName = localStorage.getItem('displayName_' + username) || username;

    const newComment = { author: authorName, text: text };
    
    // ดึงของเก่ามาเพิ่มของใหม่ แล้วเซฟกลับลงไป
    const savedComments = JSON.parse(localStorage.getItem('comments_' + currentOpenFood)) || [];
    savedComments.push(newComment);
    localStorage.setItem('comments_' + currentOpenFood, JSON.stringify(savedComments));

    // ล้างช่องกรอกและโหลดข้อความใหม่
    input.value = '';
    loadComments();
}

// ==========================================
// ระบบคำนวณ Trending และ รายการโปรด (Favorites)
// ==========================================

// ฟังก์ชันสร้าง/จำลองยอดวิวและยอดไลค์เริ่มต้น (เพื่อให้เว็บดูมีข้อมูลเคลื่อนไหว)
function initTrendingData() {
    foodMenu.forEach((food, index) => {
        // ใช้ชื่อเมนูเป็น Key ในการดึงค่า ถ้ายังไม่มีให้สุ่มค่าเริ่มต้นให้
        if (!localStorage.getItem('views_' + food.name)) {
            const randomViews = Math.floor(Math.random() * 500) + 50;
            const randomLikes = Math.floor(randomViews * (Math.random() * 0.3)); // ไลค์ประมาณ 10-30% ของยอดวิว
            localStorage.setItem('views_' + food.name, randomViews);
            localStorage.setItem('likes_' + food.name, randomLikes);
        }
    });
}

// ฟังก์ชันคำนวณและแสดงผลเมนู Trending 3 อันดับแรก
function renderTrending() {
    // ดึงข้อมูลและคำนวณคะแนน (คะแนน = ยอดวิว + (ยอดไลค์ * 5))
    const trendingList = foodMenu.map(food => {
        const views = parseInt(localStorage.getItem('views_' + food.name)) || 0;
        const userLiked = localStorage.getItem('like_' + food.name) === 'true' ? 1 : 0;
        const baseLikes = parseInt(localStorage.getItem('likes_' + food.name)) || 0;
        const totalLikes = baseLikes + (userLiked * 10); // ถ้าผู้ใช้กดไลค์เอง จะบวกคะแนนเพิ่มให้เยอะหน่อย
        
        return {
            ...food,
            views: views,
            likes: totalLikes,
            score: views + (totalLikes * 5) // สูตรคำนวณความนิยม
        };
    });

    // เรียงลำดับจากคะแนนมากไปน้อย และตัดเอาแค่ 3 อันดับแรก
    trendingList.sort((a, b) => b.score - a.score);
    const top3 = trendingList.slice(0, 3);

    const trendingGrid = document.getElementById('trendingGrid');
    trendingGrid.innerHTML = '';

    top3.forEach((food, index) => {
        trendingGrid.innerHTML += `
            <div class="trending-card" onclick="openRecipe('${food.name}')">
                <div class="badge">#${index + 1}</div>
                <img src="${food.image}" alt="${food.name}">
                <div class="trending-info">
                    <h4>${food.name}</h4>
                    <p>🔥 ${food.calories} kcal</p>
                    <p style="font-size:0.75rem; color:#E6A800;">👁️ ${food.views} | ❤️ ${food.likes}</p>
                </div>
            </div>
        `;
    });
}

// แก้ไขฟังก์ชันเปิดป๊อปอัปเพิ่มเติม เพื่อเก็บสถิติยอดเข้าชม (Views)
const originalOpenRecipe = openRecipe;
openRecipe = function(foodName) {
    originalOpenRecipe(foodName); // เรียกใช้ฟังก์ชันเดิมที่เคยเขียนไว้ก่อนหน้า

    // เพิ่มยอดวิวให้เมนูนี้นั้น +1 เมื่อมีคนคลิกเปิดดู
    let currentViews = parseInt(localStorage.getItem('views_' + foodName)) || 0;
    localStorage.setItem('views_' + foodName, currentViews + 1);
    
    // รีเฟรชหน้าจอ Trending ใหม่ให้คะแนนอัปเดต
    renderTrending();
}

// แก้ไขฟังก์ชันกดไลค์เพิ่มเติม เพื่ออัปเดตสถิติทันที
const originalToggleLike = toggleLike;
toggleLike = function() {
    originalToggleLike(); // เรียกใช้ฟังก์ชันเดิม
    renderTrending(); // อัปเดตตาราง Trending ทันที
}

// ฟังก์ชันแสดงเฉพาะเมนูที่ผู้ใช้กดถูกใจไว้ (Favorites Tab)
function showFavorites(btnElement) {
    currentCategory = 'รายการโปรด';

    // ไฮไลท์ปุ่มที่กดอยู่
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    document.getElementById('searchInput').value = '';

    // กรองเอาเฉพาะเมนูที่มีค่าใน localStorage เป็น 'true'
    const favoriteMenu = foodMenu.filter(food => localStorage.getItem('like_' + food.name) === 'true');
    
    renderMenuGrid(favoriteMenu);
}

// แก้ไขการสั่งงานเมื่อเปิดหน้าเว็บ (window.onload) ในตอนท้ายของไฟล์เดิม
// ให้แก้บล็อก window.onload ในไฟล์ script.js ของคุณให้เป็นแบบนี้ครับ:
window.onload = function() {
    // อัปเดตข้อมูลผู้ใช้งานและคำทักทาย
    updateProfileUI();

    // ดึงข้อมูลต่างๆ ขึ้นมาแสดง
    assignCategories();
    initTrendingData(); 
    renderTrending();    
    renderMenuGrid(foodMenu); 
};

// ==========================================
// ระบบ Sidebar Menu
// ==========================================

// เปิดเมนูด้านข้าง
function openSidebar() {
    document.getElementById('mySidebar').classList.add('open');
    document.getElementById('sidebarOverlay').style.display = 'block';
    
    // ดึงชื่อผู้ใช้ปัจจุบันมาแสดงบนหัวเมนู
    const savedName = localStorage.getItem('currentUser') || 'ผู้ใช้งาน';
    document.getElementById('sidebarUsername').innerText = `👋 คุณ ${savedName}`;
}

// ปิดเมนูด้านข้าง
function closeSidebar() {
    document.getElementById('mySidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').style.display = 'none';
}

// ฟังก์ชันสลับบัญชี (เด้งไปหน้าล็อกอิน โดยยังจำข้อมูลเดิมไว้ก่อน)
function switchAccount() {
    window.location.href = 'index.html'; 
}

// ฟังก์ชันออกจากระบบ (ลบชื่อคนที่ล็อกอินอยู่ออก แล้วเด้งไปหน้าล็อกอิน)
function logout() {
    if(confirm('คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?')) {
        localStorage.removeItem('currentUser'); // ล้างชื่อคนล็อกอิน
        window.location.href = 'index.html'; // กลับหน้าแรก
    }
}

// ==========================================
// ระบบจัดการโปรไฟล์ (รูปภาพ & ชื่อที่แสดง)
// ==========================================

// ลิงก์รูปมะนาว Default
const defaultProfilePic = "https://images.unsplash.com/photo-1590502593747-422ea5314a1f?w=200&q=80"; 

// ฟังก์ชันอัปเดตหน้าตาเว็บให้ตรงกับโปรไฟล์ล่าสุด
function updateProfileUI() {
    const username = localStorage.getItem('currentUser') || 'ผู้ใช้งาน';
    // ค้นหาว่าเคยตั้งชื่อที่แสดงหรือรูปไว้ไหม ถ้าไม่เคย ให้ใช้ค่าเริ่มต้น
    const displayName = localStorage.getItem('displayName_' + username) || username;
    const profilePic = localStorage.getItem('profilePic_' + username) || defaultProfilePic;

    // เปลี่ยนคำทักทายหน้าจอหลัก
    const subtitleEl = document.querySelector('.subtitle');
    if(subtitleEl) subtitleEl.innerHTML = `สวัสดีคุณ <strong>${displayName}</strong> 👋 วันนี้รับอะไรดีครับ?`;

    // เปลี่ยนหัวเมนูด้านข้าง
    const sidebarUsername = document.getElementById('sidebarUsername');
    if(sidebarUsername) sidebarUsername.innerText = `คุณ ${displayName}`;

    const sidebarPic = document.getElementById('sidebarProfilePic');
    if(sidebarPic) sidebarPic.src = profilePic;
}

// ฟังก์ชันเปิดหน้าต่างแก้ไขโปรไฟล์
function openProfile() {
    closeSidebar(); 
    const username = localStorage.getItem('currentUser') || 'ผู้ใช้งาน';
    const displayName = localStorage.getItem('displayName_' + username) || username;
    const profilePic = localStorage.getItem('profilePic_' + username) || defaultProfilePic;
    
    // ดึงข้อมูลอาหารที่แพ้จาก LocalStorage
    const userAllergies = localStorage.getItem('userAllergies') || '';

    document.getElementById('profileUsername').value = username;
    document.getElementById('profileDisplayName').value = displayName;
    document.getElementById('previewProfilePic').src = profilePic;
    
    // นำข้อมูลอาหารที่แพ้มาแสดงในช่อง
    document.getElementById('profileAllergies').value = userAllergies;

    document.getElementById('profileModal').style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}

// ฟังก์ชันดึงรูปภาพจากเครื่องมาแสดงเป็นตัวอย่าง (แปลงเป็นรหัส Base64)
let tempProfilePicBase64 = "";
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            tempProfilePicBase64 = e.target.result;
            document.getElementById('previewProfilePic').src = tempProfilePicBase64;
        }
        reader.readAsDataURL(file); // แปลงรูปเป็นข้อความยาวๆ เพื่อเซฟลง LocalStorage
    }
}

// ฟังก์ชันกดปุ่มบันทึก
function saveProfile() {
    const username = document.getElementById('profileUsername').value;
    const newDisplayName = document.getElementById('profileDisplayName').value;
    
    // รับค่าอาหารที่แพ้จากช่องกรอก
    const newAllergies = document.getElementById('profileAllergies').value;
    
    // บันทึกชื่อที่แสดงใหม่ และ อาหารที่แพ้
    localStorage.setItem('displayName_' + username, newDisplayName);
    localStorage.setItem('userAllergies', newAllergies);
    
    // ถ้ามีการอัปโหลดรูปใหม่ ให้บันทึกรูปด้วย
    if (tempProfilePicBase64 !== "") {
        localStorage.setItem('profilePic_' + username, tempProfilePicBase64);
        tempProfilePicBase64 = ""; 
    }

    updateProfileUI(); 
    closeProfile();
    alert('บันทึกโปรไฟล์และข้อมูลการแพ้อาหารเรียบร้อยแล้ว! 🍋');
}

// ==========================================
// ระบบตรวจจับอาการแพ้อาหาร (Allergy Detector)
// ==========================================
function checkAllergies(foodName, ingredients) {
    const userAllergies = localStorage.getItem('userAllergies');
    // ถ้าผู้ใช้ไม่ได้ระบุว่าแพ้อะไร ให้ข้ามไป
    if (!userAllergies) return false; 

    // แยกคำที่ผู้ใช้แพ้ออกมา
    const allergyWords = userAllergies.split(/[\s,]+/).filter(w => w.trim() !== '');
    if (allergyWords.length === 0) return false;

    const foundAllergies = [];
    
    allergyWords.forEach(word => {
        // 1. ตรวจสอบจาก "ชื่อเมนู" โดยตรง (ปลอดภัยที่สุดเผื่อลืมใส่วัตถุดิบ)
        if (foodName && foodName.includes(word) && !foundAllergies.includes(word)) {
            foundAllergies.push(word);
        }
        
        // 2. ตรวจสอบจาก "รายการวัตถุดิบ" (ถ้ามีข้อมูล)
        if (ingredients && ingredients.length > 0) {
            ingredients.forEach(ing => {
                if (ing.includes(word) && !foundAllergies.includes(word)) {
                    foundAllergies.push(word);
                }
            });
        }
    });

    return foundAllergies.length > 0 ? foundAllergies : false;
}