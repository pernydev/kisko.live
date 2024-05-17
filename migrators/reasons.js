import fs from 'fs';

const resp = await fetch('https://rata.digitraffic.fi/api/v1/metadata/detailed-cause-category-codes');
const jsonArray = await resp.json();

const transformedObject = {};

const resp2 = await fetch('https://rata.digitraffic.fi/api/v1/metadata/cause-category-codes');
const jsonArray2 = await resp2.json();
jsonArray.push(...jsonArray2);

const resp3 = await fetch('https://rata.digitraffic.fi/api/v1/metadata/third-cause-category-codes');
const jsonArray3 = await resp3.json();
jsonArray.push(...jsonArray3);

jsonArray.forEach(category => {
    transformedObject[category.id] = {
        code: category.thirdCategoryCode || category.detailedCategoryCode || category.categoryCode,
        name: category.thirdCategoryName || category.detailedCategoryName || category.categoryName,
        validFrom: category.validFrom,
    }
});

fs.writeFileSync('reasons.json', JSON.stringify(transformedObject, null, 2));