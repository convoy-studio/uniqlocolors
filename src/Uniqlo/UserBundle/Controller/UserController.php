<?php

namespace Uniqlo\UserBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

use FOS\RestBundle\Controller\Annotations\RouteResource;

use Uniqlo\UserBundle\Entity\User;

/**
 * @RouteResource("User")
 */
class UserController extends FOSRestController
{
    public function getAction(User $user)
    {
        return $user;
    }
}
