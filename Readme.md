# Apuntes

## -1 Cuando vayamos a subir contenido a la rama, confirmamos antes de hacer una subida, que nos encontramos en una terminal abierta con la ruta principal del proyecto ( donde podemos ver todas las carpetas numeradas). 

## -2 Una vez confirmemos esto podemos hacer el proceso: 
       - git add . ( o también es vállido git add -A)
       - git commit -m "feat(ejerciciox): contexto de la feature"
       - git push
      
## -3 Si el error...

```hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.```

...aparece en la consola, es que nos olvidamos de hacer pull antes de realizar u push en la rama actual, por lo que la mejor estrategia es crear una nueva para no perder el contenido actual: 

     - git branch feat/nombre_de_la_rama
     - git checkout feat/nombre_de_la_rama
     - puedes hacer ambas a la vez con el comando ---> git checkout -b feat/nombre_de_la_rama
     - git add . ( o también es vállido git add -A)
     - git commit -m "feat(ejerciciox): contexto de la feature"
     - git push
     - vuelve a la rama master git checkout master
     - git pull para descargar cambios
     - mergeamos feat/nombre_de_la_rama 
     - git pull en master para descargar ambos cambios

