const teamItem = document.querySelector('.team-section .row');
teamMembers.map(item => {
    teamItem.innerHTML += `
                <div class="col-12 col-md-4 col-lg-3 team-item mb-3">
                        <div class="card text-center">
                            <img class="card-img-top team-pic" src="${item.photo}" alt="" />
                            <div class="card-body">
                                <h4 class="card-title name">${item.name}</h4>
                                <h6 class="card-subtitle skill">${item.skill}</h6>
                                <p class="card-text bio">
                                   ${item.bio}
                                </p>
                                <div class="social-info">
                                    <a href="#" class="facebook"><i class="fa fa-facebook-official"
                                            aria-hidden="true"></i></a>
                                    <a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#" class="instagram"></a>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    `
});