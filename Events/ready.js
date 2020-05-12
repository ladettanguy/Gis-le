module.exports = async(client) => {
    client.user.setPresence({
        activity: {
            name: "Triez les papiers, Remplir un carnet de note, sucez la queue du patron (si tu lis sa c'est que tu as regardé le profil petit coquin)"
        }
    });
    console.log("je suis connecté")
};