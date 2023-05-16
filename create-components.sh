#!/bin/bash

# EXAMPLE
# ./create-components.sh my-site/src/components/ about app aside contact-me experience main projects skills

path=$1;

skip=0;
for name in $@;
do
	if [[ $skip -eq 0 ]]; then
		skip=1;
		continue;
	fi
	echo $name;
        mkdir -p "${path}/${name}";
        touch "${path}/${name}/${name}.js";
        touch "${path}/${name}/${name}.css";

	cat <<EOF > $path/$name/$name.js
import './$name.css';

const ${name^} = () => {
	return (
		<>
		</>
	);
}

export default ${name^};
EOF

done;

