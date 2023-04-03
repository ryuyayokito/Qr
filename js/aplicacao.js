const usuario = document.getElementById('titulo');
const socialMedia = document.getElementById('socialMedia');
const github = document.getElementById('github');

async function loadData(name) {
    const {data, error} = await _supabase.from("users").select().eq('name', "William");

    console.log(data)

    data.map((dado)=>{
        usuario.innerHTML += `<span>${dado.name}</span>`;
        const link = document.createElement('a');
        link.id = 'linkedin'
        link.classList = 'bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 mr-5 hover:bg-black mr-5 ml-5';
        link.href = `${dado.linkedin_url}`;
        link.target = "_blank"
        link.innerHTML = 'LinkedIn';
        document.getElementById('socialMedia').appendChild(link);

        const git = document.createElement('a');
        git.id = 'linkedin'
        git.classList = 'bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 mr-5 hover:bg-black mr-5 ml-5';
        git.href = `${dado.github_url}`;
        git.target = "_blank"
        git.innerHTML = 'GitHub';
        document.getElementById('socialMedia').appendChild(git);
    })

}



async function insertData(data) {

    const {error} = await _supabase.from("users").insert([data]);
    
    if (error) {
        console.log(error);
        return;
    } else {
        console.log("Dados salvos com sucessor!");
    }
}

loadData()

const nome = () => {
    
};


const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    
    
    
    
    
    
};