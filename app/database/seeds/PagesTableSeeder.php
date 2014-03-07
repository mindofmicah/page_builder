<?php
use Faker\Factory as Faker;

class PagesTableSeeder extends Seeder {

    public function run()
    {
        $faker = Faker::create();

        foreach(range(1, 10) as $index)
        {
            $page = new Page;
            $page->slug = $faker->bothify('?#?###?');
            $page->content = $faker->text(400);
            $page->type = 'markdown';
            $page->save();
        }
    }

}
