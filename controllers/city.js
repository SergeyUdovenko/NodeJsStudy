const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const config = require('../config');
const utils = require('../utils');
const CityModel = require('../models').CityModel;

module.exports.getRandom = (req, res) => {
	MongoClient.connect(config.mongoCongif.url, function (error, client) {
		assert.equal(null, error);
		console.log('We are connected... from controller')
		let cityCounts;
		CityModel.count({}, function (err, count) {
			cityCounts = count
		}).then(() => {

			const db = client.db(config.mongoCongif.dbName);
			const collection = db.collection('cities');

			const cities = collection
				.find()
				.limit(-1)
				.skip(utils.randomizer(cityCounts));

			cities.toArray((error, data) => {
				assert.equal(null, error);
				res.json(data)
			});

			client.close();
		});
	});
}

module.exports.getAll = (req, res) => {

	CityModel.find((error, data) => {
		if (error) {
			console.log('Error in `getAllCities` controller');
			return;
		}

		res.json(data)
	})
};



module.exports.update = (req, res) => {
	const id = req.params.id;
	CityModel.findOneAndUpdate({
		_id: id
	}, req.body, {
		new: true
	}).exec((error) => {
		if (error) {
			res.status(500).end('Error: fail to find City with id: ', id)
		}
		res.end(`Success: City with id: ${id} updated`)
	})
}
module.exports.create = (req, res) => {

	const city = req.body;

	CityModel.create(city, (error, data) => {
		if (error) {
			res.status(500).end('Error: fail to create City: ' + error)
		} else {
			res.json(data)
		}
	})
};

module.exports.delete = (req, res) => {
	const id = req.params.id;

	CityModel.findOneAndRemove({
		_id: id
	}).exec((error) => {
		if (error) {
			res.status(500).end('Error: fail to find City with id: ', id)
		}
		res.end(`Success: City with id: ${id} removed`)
	})
};

module.exports.init = (req, res) => {

	const cities = require('../data/cities');

	CityModel.create(cities, (error, data) => {
		if (error) console.log(error);

		res.json(data)
	})

};