function modals() {
    var modalsHtml = '<div class="modal fade" id="project1-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">project 1</h4></div><div class="modal-body"><figure><picture><source class="img-responsive" srcset="images/online_resume_modal_x1.jpg 1x, images/online_resume_modal_x2.jpg 2x"><img class="img-responsive" src="images/online_resume_modal_x1.jpg" alt="my online resume on a nexus smartphone"></picture><figcaption>My responsive online resume as it looks on a simulated android mobile device</figcaption></figure></div></div></div></div><div class="modal fade" id="project2-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">project 2</h4></div><div class="modal-body"><figure><picture><source class="img-responsive" srcset="images/myfrogger_modal_x1.jpg 1x, images/myfrogger_modal_x2.jpg 2x"><img class="img-responsive" src="images/myfrogger_modal_x1.jpg" alt="the frogger arcade game"></picture><figcaption>Screenshot of my Frogger-Arcade-Game clone</figcaption></figure></div></div></div></div><div class="modal fade" id="project3-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">project 3</h4></div><div class="modal-body"><figure><picture><source class="img-responsive" srcset="images/webperf_opt_modal_x1.jpg 1x, images/webperf_opt_modal_x2.jpg 2x"><img class="img-responsive" src="images/webperf_opt_modal_x1.jpg" alt="recording rendering timeline of a webpage animation"></picture><figcaption>Checking animation frame-rate with DevTools</figcaption></figure></div></div></div></div>';
    var $body = $('body');
        $body.append(modalsHtml);
};

modals();