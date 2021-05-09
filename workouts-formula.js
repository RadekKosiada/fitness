[
  '{{repeat(1000)}}',
  {
    index: '{{index()}}',
    name: '{{lorem(3, "words")}}',
    description: '{{lorem(7, "words")}}',
    startDate: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd")}}',
    category: function (tags) {
      var cat = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
      return cat[tags.integer(0,6)];
    }
    }
]
//https://www.json-generator.com/