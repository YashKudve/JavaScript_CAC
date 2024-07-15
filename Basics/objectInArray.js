const coding = [
    {
        languageName:"JavaScript",
        languageFileName:'js',
        colour:{
            red:'red'
        }
    },
    {
        languageName:"Java",
        languageFileName:'java',
        colour:{
            red:'red'
        }
    },
    {
        languageName:"Python",
        languageFileName:'py',
        colour:{
            red:'orange'
        }
    },
]

coding.forEach((item)=>(
    // console.log(item.languageFileName)
    console.log(item.colour.red)
))