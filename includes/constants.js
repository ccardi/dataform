const PROJECT_ID = "pod-fr-retail";
const date_start="2017-08-01"

function regionGroup(city) {
  return `CASE
          WHEN ${city} IN ("Paris") THEN "Paris"
          --WHEN ${city} IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
          --WHEN ${city} IN ("Paris") THEN "toto"
          ELSE "Others"
          END`;
};

function lastDate(table_name){
  return `SELECT max(DATE(tdate))- 30 as last_date,
  FROM ${table_name}`;
}

module.exports = { PROJECT_ID, date_start, lastDate, regionGroup };