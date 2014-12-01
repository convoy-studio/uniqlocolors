<?php

namespace Uniqlo\UserBundle\Controller;

use Symfony\Component\HttpFoundation\Request;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Util\Codes;

use Uniqlo\UserBundle\Exception\InvalidFormException;

use Uniqlo\UserBundle\Entity\User;

/**
 * @RouteResource("User")
 */
class UserController extends FOSRestController
{
    public function getAction(User $user)
    {
        $em = $this->getDoctrine()->getManager();

        return $em->getRepository('UniqloUserBundle:User')->find(1);
    }

    /**
     * @Annotations\View(
     *  template = "UniqloUserBundle:User:newUser.html.twig",
     *  statusCode = Codes::HTTP_BAD_REQUEST,
     *  templateVar = "form"
     * )
     */
    public function postAction(Request $request)
    {
       try {
            $user = $this->container->get('uniqlo.user')->post($request->request->all());

            $routeOptions = [
                'user'    => $user->getId(),
                '_format' => $request->get('_format')
            ];

            return $this->routeRedirectView('get_user', $routeOptions, Codes::HTTP_CREATED);
       } catch (InvalidFormException $exception) {
           return $exception->getForm();
       }
    }
}
