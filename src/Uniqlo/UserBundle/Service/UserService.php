<?php

namespace Uniqlo\UserBundle\Service;

use Symfony\Component\Form\FormFactoryInterface;

use Doctrine\ORM\EntityManager;

use Uniqlo\UserBundle\Exception\InvalidFormException;

use Uniqlo\UserBundle\Entity\User;
use Uniqlo\UserBundle\Form\UserType;

class UserService
{
    private $em;
    private $formFactory;

    public function __construct(EntityManager $em, FormFactoryInterface $formFactory)
    {
        $this->em = $em;
        $this->formFactory = $formFactory;
    }

    /**
     * Creates a new User
     *
     * @param array $parameters
     * @return User
     */
    public function post(array $parameters)
    {
        $user = $this->create();

        return $this->processForm($user, $parameters, 'POST');
    }

    /**
     * Processes the form
     *
     * @param User          $user
     * @param array         $parameters
     * @param String        $method
     * @return User
     *
     * @throws Uniqlo\UserBundle\Exception\InvalidFormException
     */
    private function processForm(User $user, array $parameters, $method = 'PUT')
    {
        $form = $this->formFactory->create(new UserType, $user, ['method' => $method]);
        $form->submit($parameters, 'PATCH' !== $method);

        if ($form->isValid()) {
            $user = $form->getData();
            $this->em->persist($user);
            $this->em->flush($user);

            return $user;
        }

        throw new InvalidFormException('Invalid submitted data', $form);
    }

    /**
     * Instanciates a new User
     *
     * @return User
     */
    private function create()
    {
        return new User;
    }
}
