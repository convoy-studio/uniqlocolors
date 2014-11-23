<?php

namespace Uniqlo\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use FOS\RestBundle\Controller\FOSRestController;

class UserController extends FOSRestController
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {}
}
