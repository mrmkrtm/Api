(req,res) => {
    request({
        headers : {
            'User-Agent' : 'mrmkrtm'
        },
        uri: 'https://api.github.com/repos/mrmkrtm/mrmkrtm.github.io'
    }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        res.send(info.stargazers_count.toString());
      }
      else res.send(404,"error");
    })
}