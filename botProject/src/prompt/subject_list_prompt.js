const subject_list_display = (subjects_display_list) => 
{

    // console.log(json_file);
    const details = 
    {
        'attachments':
        [
            {
                fields: 
                [
                    {
                        value: subjects_display_list,//subjects[sub].name,
                        short: true,
                    },
                ]
            }
        ],
    }

    return (details);
};



module.exports = 
{
    subject_list_display
};