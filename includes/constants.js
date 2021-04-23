const PROJECT_ID = "pod-fr-retail";
const date_start="2017-09-01"

function regionGroup(city) {
  return `CASE
          WHEN ${city} IN ("US", "CA") THEN "NA"
          WHEN ${city} IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
          WHEN ${city} IN ("AU") THEN ${city}
          ELSE "Other regions"
          END`;
};

function returnLastDate(table_name){
  return `SELECT max(DATE(tdate)) last_date,
  FROM ${table_name}}`
}

module.exports = { PROJECT_ID, date_start, returnLastDate, regionGroup };