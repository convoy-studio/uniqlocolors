<?php

namespace Uniqlo\UserBundle\Exception;

use \RuntimeException;

class InvalidFormException extends RuntimeException
{
    protected $form;

    public function __construct($message, $form = null)
    {
        parent::__construct($message);
        $this->form = $form;
    }

    public function getForm()
    {
        return $this->form;
    }
}
