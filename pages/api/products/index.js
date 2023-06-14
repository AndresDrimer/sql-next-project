import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);

    case "POST":
      return await saveProduct(req, res);
  }
}

const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM product");
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  const { name, description, price } = req.body;

  {
    /*const [result] = await pool.query("INSERT INTO product SET ?", {
        name,
        description,
        price,
      });*/
  }

  {
    /* el uso de signos ? es muy recomendable para marcar las variables que le voy a pasar.
    Inlcusive previene ataques a nivel seguridad*/
  }
  try {
    const [result] = await pool.query(
      "INSERT INTO product (name, description, price) VALUES (?, ?, ?)",
      [name, description, price]
    );

    res.status(200).json({ name, description, price, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
