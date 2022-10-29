const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['LAX', 'AUS', 'DEN', 'SAN', 'DFW'],
    },
    arrivals: {
        type: Date,
        
    }
});

const flightSchema = new Schema ({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: { 
        type: String,
        enum: ['LAX', 'AUS', 'DEN', 'SAN', 'DFW'],
        default: 'LAX'
    },
    flightNo: { 
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: { 
        type: Date,
        default: function() {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            return date;
        }
    },
    destinations: {
        type: [destinationSchema]
    }
}); 




module.exports = mongoose.model('Flight', flightSchema);