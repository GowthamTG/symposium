const express = require("express");
const app = express();
const { db } = require("./db");
const {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  increment,
} = require("firebase/firestore");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(express.json());

app.post("/payment/event", async (req, res) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", req.body.payload.payment.entity.email)
  );
  const userSnapshot = await getDocs(q);

  if (
    req.body.payload.payment.entity.status === "captured" &&
    req.body.payload.payment.entity.captured &&
    req.body.payload.payment.entity.amount === 300
  ) {
    userSnapshot.forEach(async (user) => {
      const userRef = doc(db, "users", user.id);

      await updateDoc(userRef, {
        paidForEvents: true,
        eventPaymentId: req.body.payload.payment.entity.id,
        eventOrderId: req.body.payload.payment.entity.order_id,
      });
    });

    return res.send("SUCCESS");
  } else {
    return res.send("FAILED");
  }
});

app.post("/payment/workshop", async (req, res) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", req.body.payload.payment.entity.email)
  );
  const userSnapshot = await getDocs(q);

  if (
    req.body.payload.payment.entity.status === "captured" &&
    req.body.payload.payment.entity.captured &&
    req.body.payload.payment.entity.amount === 200
  ) {
    userSnapshot.forEach(async (user) => {
      const userRef = doc(db, "users", user.id);

      await updateDoc(userRef, {
        paidForWorkshops: true,
        workshopPaymentId: req.body.payload.payment.entity.id,
        workshopOrderId: req.body.payload.payment.entity.order_id,
      });
    });

    return res.send("SUCCESS");
  } else {
    return res.send("FAILED");
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

const test = [
  {
    college: "sona college of technology",
    department: "Electrical & Electronics Engineering",
    email: "ragulhchc@gmail.com",
    name: "Ragul",
    phone: "8778324497",
    regno: "123456",
    year: "3",
    paidForEvents: true,
    eventPaymentId: "Some ID",
    eventOrderId: "Some ID",
    paidForWorkshops: true,
    workshopPaymentId: "Some ID",
    workshopOrderId: "Some ID",
  },
];
