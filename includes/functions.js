function regionGroup(city) {
  return `CASE
          WHEN ${city} IN ("Paris") THEN "Paris"
          WHEN ${city} IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
          ELSE "Others"
          END`;
};

function last30day (table_name, date_column){
  return `SELECT max(${date_column})- 30 as last_date,
  FROM ${table_name}`;
}

module.exports = {last30day, regionGroup };