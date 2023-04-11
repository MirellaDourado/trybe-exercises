use('bios');
db.bios.find({ _id: 8 }, { birth: 1, name: 1, _id: 0 });