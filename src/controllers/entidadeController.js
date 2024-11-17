const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, '../data/entidade.json');

function loadData() {
  return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
}

function saveData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

exports.getAll = (req, res) => {
  const data = loadData();
  res.json(data);
};

exports.create = (req, res) => {
  const data = loadData();
  const newItem = req.body;
  data.push(newItem);
  saveData(data);
  res.status(201).json(newItem);
};

exports.update = (req, res) => {
  const data = loadData();
  const id = req.params.id;
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = updatedItem;
    saveData(data);
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: "Item não encontrado" });
  }
};

exports.delete = (req, res) => {
  const data = loadData();
  const id = req.params.id;
  const newData = data.filter(item => item.id !== id);
  if (data.length === newData.length) {
    return res.status(404).json({ message: "Item não encontrado" });
  }
  saveData(newData);
  res.status(204).end();
};
