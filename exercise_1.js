//อธิบายสั้นสุดแต่เข้าใจที่สุด js array method map filter find

//```javascript
const jojoCharacters = [
  {
    id: 1,
    name: "Jotaro Kujo",
    stand: "Star Platinum",
    part: 3,
    isVillain: false,
    powerLevel: 95,
  },
  {
    id: 2,
    name: "DIO",
    stand: "The World",
    part: 3,
    isVillain: true,
    powerLevel: 99,
  },
  {
    id: 3,
    name: "Noriaki Kakyoin",
    stand: "Hierophant Green",
    part: 3,
    isVillain: false,
    powerLevel: 80,
  },
  {
    id: 4,
    name: "Jean Pierre Polnareff",
    stand: "Silver Chariot",
    part: 3,
    isVillain: false,
    powerLevel: 82,
  },
  {
    id: 5,
    name: "Josuke Higashikata",
    stand: "Crazy Diamond",
    part: 4,
    isVillain: false,
    powerLevel: 85,
  },
  {
    id: 6,
    name: "Yoshikage Kira",
    stand: "Killer Queen",
    part: 4,
    isVillain: true,
    powerLevel: 90,
  },
  {
    id: 7,
    name: "Giorno Giovanna",
    stand: "Gold Experience",
    part: 5,
    isVillain: false,
    powerLevel: 98,
  },
];
/* ```

## **โจทย์:** สมาคมสปีดวากอนต้องการทำฐานข้อมูลสแตนด์ ให้สร้าง Array ใหม่ที่ดึงมาเฉพาะ **"ชื่อสแตนด์" (`stand`)** ของตัวละครทุกคน

**ผลลัพธ์ที่คาดหวัง:**

```javascript
[
  "Star Platinum",
  "The World",
  "Crazy Diamond",
  "Killer Queen",
  "Gold Experience",
];
```

**โจทย์:** เราจำเป็นต้องเฝ้าระวังบุคคลอันตราย ให้กรองเอาเฉพาะข้อมูลของตัวละครที่เป็น **ตัวร้าย (`isVillain` เป็น `true`)**
**ผลลัพธ์ที่คาดหวัง:**

```javascript
[
  {
    id: 2,
    name: "DIO",
    stand: "The World",
    part: 3,
    isVillain: true,
    powerLevel: 99,
  },
  {
    id: 4,
    name: "Yoshikage Kira",
    stand: "Killer Queen",
    part: 4,
    isVillain: true,
    powerLevel: 90,
  },
];
```

**โจทย์:** DIO แข็งแกร่งเกินไป! ให้ค้นหาข้อมูลของตัวละคร **คนแรก** ที่มีพลังรบ **(`powerLevel`) มากกว่า 90** และ **ไม่ใช่ตัวร้าย (`isVillain` เป็น `false`)**

**ผลลัพธ์ที่คาดหวัง:**

```javascript
{ id: 1, name: 'Jotaro Kujo', stand: 'Star Platinum', part: 3, isVillain: false, powerLevel: 95
```

**โจทย์:** เรากำลังจัดตั้งทีมเดินทางไปอียิปต์ ให้ดึงมาเฉพาะ **"ชื่อผู้ใช้สแตนด์" (`.map`)** ที่ปรากฏตัวใน **ภาค 3 (`part` เท่ากับ 3)** และ **ไม่ใช่ตัวร้าย (`.filter`)**

**ผลลัพธ์ที่คาดหวัง:**

```javascript
["Jotaro Kujo", "Noriaki Kakyoin", "Jean Pierre Polnareff"];
```
 */

console.log("\nอธิบายสั้นสุดแต่เข้าใจที่สุด js array method map filter find");
console.log(
  "\nmap: return all data in array with special function assign in code\nfilter: return only data in array that meet condition\nfind: return first data in array that meet condition",
);

const result_1 = jojoCharacters.map((result) => {
  return result.stand;
});
console.log("\n-----Exercise 1-----");
console.log(result_1);

const result_2 = jojoCharacters.filter((result) => {
  return result.isVillain;
});
console.log("\n-----Exercise 2-----");
console.log(result_2);

const result_3 = jojoCharacters.find((result) => {
  return result.powerLevel > 90 && result.isVillain === false;
});
console.log("\n-----Exercise 3-----");
console.log(result_3);

const result_4 = jojoCharacters.filter((x) => {
  return x.part === 3 && x.isVillain === false;
});
const result_4_1 = result_4.map((name) => {
  return name.name;
});

console.log("\n-----Exercise 4-----");
console.log(result_4_1);
