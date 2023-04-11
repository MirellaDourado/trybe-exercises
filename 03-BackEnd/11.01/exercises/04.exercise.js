use('bios');
db.bios.find({ "name.first": 'John' }).pretty();