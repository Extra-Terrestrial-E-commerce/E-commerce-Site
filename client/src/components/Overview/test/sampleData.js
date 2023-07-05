export default {

  currentProduct: {
  "id": 40346,
  "campus": "hr-rfp",
  "name": "Morning Joggers",
  "slogan": "Make yourself a morning person",
  "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  "category": "Pants",
  "default_price": "40.00",
  "created_at": "2021-08-13T14:38:44.509Z",
  "updated_at": "2021-08-13T14:38:44.509Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "100% Cotton"
      },
      {
          "feature": "Cut",
          "value": "Skinny"
      }
  ]
  },
  // for product_id: 40345, relatedItems[3]
  review: {
    "product_id": "40345",
    "ratings": {
        "1": "6",
        "2": "4",
        "3": "8",
        "4": "129",
        "5": "26"
    },
    "recommended": {
        "false": "28",
        "true": "145"
    },
    "characteristics": {
        "Quality": {
            "id": 135223,
            "value": "3.5208333333333333"
        }
    }
  },
  styles: [
  	{
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                },
  			        {
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                }
  			// ...
            ],
            "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  {
        "style_id": 2,
        "name": "Desert Brown & Tan",
        "original_price": "140",
        "sale_price": "0",
        "default?": false,
        "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  ]
  // ...
}
