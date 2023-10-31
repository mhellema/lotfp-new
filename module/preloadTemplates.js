export const preloadHandlebarsTemplates = async function () {
    const templatePaths = [
        //Character Sheets
        'systems/lotfp/templates/actors/character-sheet.html',
        'systems/lotfp/templates/actors/monster-sheet.html',
        //Actor partials
        //Sheet tabs
        'systems/lotfp/templates/actors/partials/character-header.html',
        'systems/lotfp/templates/actors/partials/character-attributes-tab.html',
        'systems/lotfp/templates/actors/partials/character-abilities-tab.html',
        'systems/lotfp/templates/actors/partials/character-spells-tab.html',
        'systems/lotfp/templates/actors/partials/character-inventory-tab.html',
        'systems/lotfp/templates/actors/partials/character-notes-tab.html',

        'systems/lotfp/templates/actors/partials/monster-header.html',
        'systems/lotfp/templates/actors/partials/monster-attributes-tab.html'
    ];
    return loadTemplates(templatePaths);
};
